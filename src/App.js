import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import auth from "./firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

function App() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  
  const handleGoogle = () => {
    signInWithGoogle()
  };
  if(error){
    console.log(error);
  }
  return (
    <div>
      {/* <h2>Hello From App</h2>
      <button className='btn btn-primary'>Hello</button> */}
      
      <button className="btn btn-primary" onClick={handleGoogle}>
        Google
      </button>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
