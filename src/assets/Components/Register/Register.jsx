import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash, } from "react-icons/fa6";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;

        const minNumberofChars = 6;
        const maxNumberofChars = 16;
        const regularExpression = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (password.length < minNumberofChars || password.length > maxNumberofChars) {
            toast.error("password should contain atleast 6 character ");
            return;
        }
        else if (!regularExpression.test(password)) {
            toast.error("password should contain atleast one number,one capital letter, one small letter and one special character");
            return;
        }

        else if (!terms) {
            toast.error("Please Accept our terms and conditions");
            return;
        }

        createUser(email, password)
            .then((result) => {
                toast.success('Congratulation!!! Your Registration process Successfully done!')
                console.log(result.user)
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }
    return (
        <div>
            <div className="h-[100vh] flex justify-center items-center">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-bold text-center font-mono">Get the Party Started!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">

                            <form onSubmit={handleRegister} className="card-body">
                                <div>
                                    <p className="py-4 text-center text-xl font-mono font-semibold">Register Here</p>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-mono text-lg">Name</span>
                                    </label>
                                    <input type="text" name="text" placeholder="Enter Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-mono text-lg">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text font-mono text-lg">Password</span>
                                    </label>
                                    <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" className="input input-bordered" required />
                                    <span className='cursor-pointer text-xl absolute bottom-3 right-5' onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                        }
                                    </span>
                                </div>
                                <div className='py-3'>
                                    <input type="checkbox" name="terms" id="terms" />
                                    <label className='ml-2' htmlFor="terms">Accept our terms and conditions</label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-mono font-semibold">Login</button>
                                </div>
                                <div>
                                    <p className="font-mono my-3">Already Have an Account? So, <Link to='/login' className="text-blue-600 underline">Login</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Register;