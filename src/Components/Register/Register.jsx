import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="min-h-screen bg-base-200 flex flex-col justify-center">
            <div className="flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 mx-4 lg:mx-auto  max-w-sm shadow-2xl bg-base-100 mt-6">
                    <div className="card-body">
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
                            <input type="text" name='name' placeholder="Paste Your Photo URL" className="input input-bordered" required />
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
                                <p className="label-text-alt text-[#FF0000]">All error in here</p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary-content">Register</button>
                        </div>
                        
                        <label className="label">
                                <p className="label-text-alt">Already Have Account ?<Link to="/login"> Login Here</Link></p>
                            </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;