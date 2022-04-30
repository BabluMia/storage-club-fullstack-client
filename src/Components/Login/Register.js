import React from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [signInWithGoogle, user2, loading1, error1] = useSignInWithGoogle(auth);
  // create user and send verification hook
  const [createUserWithEmailAndPassword, user1, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  // update user hook
  const [updateProfile] = useUpdateProfile(auth);
  // register user
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast("Send Verification!");
  };
  const handleGoogle = () => {
    signInWithGoogle();
  };
  // error
  let errorElem;
  if (error) {
    return (errorElem = error?.message);
  }else if(error1){
      toast(error1.message)
  }
//   if (loading) {
//     return <Loading />;
//   }
  if (user) {
    navigate("/home");
  }

  return (
    <div className="form-body">
      <div className="container-main-form " id="container">
        <div className="form-container log-in-container">
          <form action="#" onSubmit={handleRegister}>
            <h1>Sign Up</h1>
            {/* <SocialLogin /> */}
            <div>
              <FcGoogle onClick={handleGoogle} style={{fontSize:"30px" , margin:"10px 0px",cursor:'pointer'}}></FcGoogle>
            </div>
            <span>or create your account</span>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button style={{backgroundColor:'skyblue' , color:'black',border:'0',margin:'6px 0px'}}>Sign up</button>
            <p>{errorElem}</p>
            <p>
              Already have an acount{" "}
              <span className="fw-bold">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </form>
        </div>
        {/* <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Register;