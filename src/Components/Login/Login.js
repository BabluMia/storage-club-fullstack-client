import "./Login.css";
import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import { Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const Login = () => {
  const [user] = useAuthState(auth);
  const [signInWithEmailAndPassword, user1, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user2, loading1, error1] = useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let errorElement;
  if (loading) {
    return <Loading />;
  }
  const handleGoogle = () => {
    signInWithGoogle();
  };
  // form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post("http://localhost:5000/login", { email });
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };
  // error
  if (error || error1) {
    errorElement = (
      <div>
        <p className="my-2">
          Error: {error?.message} {error1?.message}
        </p>
      </div>
    );
  }
  // reset pasword
  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("Sent reset email");
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="form-body">
      <div className="container-main-form " id="container">
        <div className="form-container log-in-container">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>

            {/* <SocialLogin /> */}
            <div>
              <FcGoogle
                onClick={handleGoogle}
                style={{
                  fontSize: "30px",
                  margin: "10px 0px",
                  cursor: "pointer",
                }}
              ></FcGoogle>
            </div>
            <span>or use your account</span>
            <input required ref={emailRef} type="email" placeholder="Email" />
            <input
              required
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />

            <p>
              Forget Password ?{" "}
              <Link
                className="text-primary text-decoration-none pe-auto"
                to="/login"
              >
                {" "}
                <Button
                  className="bg-white text-dark border-0 px-2"
                  onClick={resetPassword}
                >
                  Reset
                </Button>
              </Link>
            </p>

            {errorElement}
            <button
              type="submit"
              style={{
                backgroundColor: "skyblue",
                color: "black",
                border: "0",
                margin: "6px 0px",
              }}
            >
              Log In
            </button>
            <p>
              New Here{" "}
              <span className="fw-bold">
                <Link to="/register">Register</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
