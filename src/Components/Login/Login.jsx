import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const Login = () => {

    const [success, setSuccess] = useState ('');
    const [error, setError] = useState ('');
    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate() ;
    const from = location.state?.from?.pathname || "/";


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                if (!loggedInUser){
                    setError('Please Check Your email & password')
                }
                setSuccess ('User Login Successfull');
                setError('');
                navigate(from,{replace:true});
            })
            .catch(error => {
                setError(error)
            })


    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then( result => {
            const loggedUser = result.user;
            if (!loggedUser){
                setError('Please Check Your email & password')
            }
            setSuccess ('User Login Successfull');
            setError('');
            navigate(from,{replace:true});
        })
        .catch(error => {
            
        }) 
    }


    const signInHandler = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        login(email, password)
        .then (result=>{
            const loggedUser = result.user;
            if (!loggedUser){
                setError('Please Check Your email & password')
            }
            setSuccess ('User Login Successfull');
            setError('');
            navigate(from,{replace:true});
        })

        .catch (error =>{
            setError(error.message)
        })
    }
    
    return (
        <div className=" min-h-screen bg-base-200 flex flex-col justify-center">
            <div className="  flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 mx-4 lg:mx-auto  max-w-sm shadow-2xl bg-base-100 mt-6">
                    <form onSubmit={signInHandler} className="card-body">
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
                                
                                   <p className="label-text-alt text-[#FF0000]">{error}</p>
                                   <p className="label-text-alt text-[#058800]">{success}</p>
                                
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button  type='submit' className="btn btn-primary-content">Login</button>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline mt-2 scale-75"> <FcGoogle className='me-2'/> Login with Google</button>
                            <button onClick={handleGithubSignIn} className="btn btn-outline scale-75"> <FaGithub className='me-2'/> Login with  GitHub</button>
                        </div>
                        
                        <label className="label">
                                <p className="label-text-alt">New to Site ?<Link to="/register"> Register Here</Link></p>
                            </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;