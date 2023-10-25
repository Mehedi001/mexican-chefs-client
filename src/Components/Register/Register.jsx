import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState (null);

    const {register, auth} = useContext(AuthContext)

    const submitHandler = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password= form.password.value;
        register(email, password)
        .then (result => {
            const user = result.user;

            updateProfile(auth.currentUser, {displayName:name, photoURL:photo} )
            .then (() => {})
            .catch((error)=>{
               
            })
        })
        .catch (error => {
            setError(error.message);
        })
    }
    return (
        <div className="min-h-screen bg-base-200 flex flex-col justify-center">
            <div className="flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 mx-4 lg:mx-auto  max-w-sm shadow-2xl bg-base-100 mt-6">
                    <form onSubmit={submitHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Paste Your Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">
                                {
                                    error && <p className="label-text-alt text-[#FF0000]">{error}</p> 
                                }
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary-content">Register</button>
                        </div>
                        
                        <label className="label">
                                <p className="label-text-alt">Already Have Account ?<Link to="/login"> Login Here</Link></p>
                            </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;