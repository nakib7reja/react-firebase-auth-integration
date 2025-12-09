import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

const Login = () => {
    const authInfo = use(AuthContext)
    console.log(authInfo)


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                    <form onSubmit=''>
                        <fieldset className="fieldset">

                            {/* Email field */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />

                            {/* password field */}
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />

                            {/* bottom field */}
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p>I don't have any account. Please <Link className='text-blue-600 underline' to='/register'>Registration</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;