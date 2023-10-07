import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';




const Register = () => {
    const { createUser } = useContext(AuthContext)


    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        createUser(email, password)
            .then(() => {
                toast.success('Heyyyy User! Your Registration process Successfully done!')
            })
            .catch(() => {
                toast.error("Heyyy User!! Something wrong. Please Try again")
            })
    }
    return (
        <div>
            <div className="h-[100vh] flex justify-center items-center">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-bold text-center font-mono">Get the Party Started!</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

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
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-mono text-lg">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Enter Password" className="input input-bordered" required />
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