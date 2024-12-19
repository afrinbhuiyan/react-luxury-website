
import { Link } from "react-router";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/NavBar/Navbar";
import 'boxicons'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import Footer from "../Footer/Footer";


const Login = () => {

    const { signIn } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        signIn(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="">
            <Header></Header>
            <div className="lg:mx-40 ">
                <Navbar></Navbar>
            </div>
            <div className="md:w-3/4 lg:w-1/3 mx-auto border border-[#11111157] p-10 rounded-md mb-10">
                <div className="flex justify-between border-b pb-3">
                   <h1 className="text-2xl font-semibold">Sign in</h1>
                   <p> <small>Don’t Have An Account ?</small> <Link className="hover:text-blue-500 underline" to={'/register'} >Register</Link> </p>
                </div>
                <form onSubmit={handleLogin} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control items-end mt-6 ">
                        <button className="py-[5px] w-64 border-b-2 border-b-blue-700 text-white rounded-md bg-blue-500 hover:bg-blue-600">Sign in</button>
                    </div>
                </form>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;