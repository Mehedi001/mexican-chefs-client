import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
    const {user, logout} = useContext(AuthContext);

    const signOut = () =>{
        logout()
    }
    
    return (
        <nav className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Mexico Chef's</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/training">Chef Training</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar">
                    <div className="w-12 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png" alt="this is profile photo of user" />
                    </div>
                </div>
                {
                    user ? <Link onClick={signOut} to="/login" className="btn">Logout</Link> : <Link to="/login" className="btn">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;