import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <div className=" min-h-screen bg-base-200 flex flex-col justify-center">
            <div className="  flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 mx-4 lg:mx-auto  max-w-sm shadow-2xl bg-base-100 mt-6">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">
                                <p className="label-text-alt text-[#FF0000]">All error in here</p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary-content">Login</button>
                            <button className="btn btn-outline mt-2 scale-75"> <FcGoogle className='me-2'/> Login with Google</button>
                            <button className="btn btn-outline scale-75"> <FaGithub className='me-2'/> Login with  GitHub</button>
                        </div>
                        
                        <label className="label">
                                <p className="label-text-alt">New to Site ?<Link to="/register"> Register Here</Link></p>
                            </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;