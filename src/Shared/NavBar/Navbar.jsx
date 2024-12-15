import { NavLink } from "react-router";
import './Navbar.css'

const Navbar = () => {

    const links = <>
            <li><NavLink className={'hover:text-[#5493f1] hover:underline'} to={'/'} >Home</NavLink></li>
            <li><NavLink to={'/login'} >Login</NavLink></li>
            <li><NavLink to={'/register'} >Register</NavLink></li>
            <li><NavLink to={'/register'} >Update Profile</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <img className="border p-2 border-[#1111113f] " width={'80px'} src="https://i.ibb.co.com/wJnBvBN/deal-8858003.png" alt="" />
                    <p className="ml-4"><span className="text-5xl pt-serif-caption-regular-italic mb-10 text-[#67abeb]" >Luxery</span> <br /> 
                    <span className="pt-serif-caption-regular-italic text-[#1c1a5a] " >Estate Rental </span> </p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-4 px-1">
                        {links}
                    </ul>
                </div>
                <div className=" navbar-end ibm-plex-sans-medium">
                    <nav className="button">
                    <a>Login</a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;