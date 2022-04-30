import "./Login.css";
import React from "react";
import SocialLogin from "./SocialLogin";


const Login = () => {
  
  return <div className="form-body">
  <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form className="login-form">
					<label for="chk" aria-hidden="true" style={{color:"#573b8a"}}>Sign up</label>
					<input type="text" name="txt" placeholder="User name" required/>
					<input type="email" name="email" placeholder="Email" required/>
					<input type="password" name="pswd" placeholder="Password" required/>
					<button>Sign up</button>
          <p className="text-center my-1">Or</p>
				</form>
        <SocialLogin/>
			</div>

			<div class="login">
				<form className="login-form">
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required />
					<input type="password" name="pswd" placeholder="Password" required/>
					<button>Login</button>
            <p className="text-center my-1">Or</p>
				</form>
        <SocialLogin/>
			</div>
	</div>
  
  </div>;
};

export default Login;
