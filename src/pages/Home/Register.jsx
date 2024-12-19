import { Link } from "react-router";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/NavBar/Navbar";
import 'boxicons'
import { AuthContext } from "../../Provider/AuthProviders";
import { useContext } from "react";
import Footer from "../../Footer/Footer";

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const userName = form.get('UserName')
        const lastName = form.get('lastName')
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password, userName, lastName)

        createUser(email, password)
        .then((result) => {
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
                   <h1 className="text-2xl font-semibold ">Already have an Acccount</h1>
                   <p> <small>Don’t Have An Account ?</small> <Link className="hover:text-blue-500 underline" to={'/login'} >Login</Link> </p>
                </div>
                <form onSubmit={handleRegister} className="">
                    <div className="flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" name="UserName" placeholder="Your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" name="lastName" placeholder="Your name" className="input input-bordered" required />
                    </div>
                    </div>
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
                        <button className="py-[5px] w-64 border-b-2 text-white border-b-blue-700 rounded-md bg-blue-500 hover:bg-blue-600">Create Account</button>
                    </div>
                </form>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;