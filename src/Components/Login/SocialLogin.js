import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const googleLogin = () =>{
    signInWithGoogle()
  }
    return (
        <div>
            <button onClick={googleLogin} className='btn btn-primary'>Google Login</button>
        </div>
    );
};

export default SocialLogin;