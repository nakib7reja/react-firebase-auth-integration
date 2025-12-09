// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';
// import { auth } from '../firebase/firebase.init';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

const Register = () => {
    const { createUser } = use(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    // const handleRegister = (e) => {
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     const name = e.target.name.value;
    //     console.log(email, password)

    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then(result=>{
    //         const user = result.user
    //         console.log(user)
    //     })
    //     .catch((error)=>{
    //         const errorCode =error.code
    //         const errorMessage= error.message
    //         console.log('error message:',errorMessage, 'error code:', errorCode)
    //     })
    // }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-4xl font-bold">Registration now!</h1>
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                            {/* Name field */}
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />
                            {/* Email field */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />

                            {/* password field */}
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />

                            {/* bottom field */}
                            {
                                // error ? <p>{error}</p>:''
                            }
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                    <p>Already have an account? Please <Link className='text-blue-600 underline' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;