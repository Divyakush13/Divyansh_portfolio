import React, { useState } from 'react';
import "./Login.scss"
const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle login or signup logic here based on the value of isSignUp.
        if (isSignUp) {
            // Handle signup
        } else {
            // Handle login
        }
    }

    return (
        <div className='auth'>
            <form onSubmit={handleSubmit}>
                <h1 style={{ fontSize: '40px',background:'none'}}>
                {isSignUp ? 'SIGN UP' : 'LOGIN'}
                </h1>                
                <input type="text" name='Email' placeholder='Email' />
                <input type="password" name="password" placeholder='Password' />
                {isSignUp && <input type="password" name="confirmPassword" placeholder='Confirm Password' />}
                <button type='submit'>{isSignUp ? 'SIGN UP' : 'LOGIN'}</button>
                <h1 style={{fontSize: 10, background:'none'}}>
                    {isSignUp
                        ? 'Already have an account?'
                        : 'Don\'t have an account yet?'}
                    <span onClick={toggleSignUp} style={{fontSize: 10, background:'none', color:' blue'}}>
                        {isSignUp ? 'Login' : 'Sign Up'}
                    </span>
                </h1>
            </form>
        </div>
    );
};

export default Login;
