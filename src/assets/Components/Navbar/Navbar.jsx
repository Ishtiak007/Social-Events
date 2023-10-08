import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import Marquee from "react-fast-marquee";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)


    const navLinks = <>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " font-semibold text-[18px] underline" : "text-white font-semibold text-[18px]"
        } to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " font-semibold text-[18px] underline" : "text-white font-semibold text-[18px]"
        } to='/service'>Service</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " font-semibold text-[18px] underline" : "text-white font-semibold text-[18px]"
        } to='/about'>About</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " font-semibold text-[18px] underline" : "text-white font-semibold text-[18px]"
        } to='/feature'>Feature</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " font-semibold text-[18px] underline" : "text-white font-semibold text-[18px]"
        } to='/login'>Login</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "  text-[18px] underline" : "text-white font-semibold text-[18px]"
        } to='/register'>Register</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log Out successfully!');
            })
            .catch((error) => {
                toast.error("Something wrong. Please Try again")
                console.log(error)
            })

    }

    return (
        <div className="navbar bg-[#444343a5] rounded-t-md sticky inset-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FaBars className="text-3xl"></FaBars>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-400 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="border shadow-lg"><span className="md:text-3xl font-bold italic text-white">Social</span><span className="md:text-3xl font-bold text-red-700 italic">Events</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <span className="text-yellow-200 text-xl font-medium font-serif"><Marquee>{user.email}</Marquee></span>
                }
                {
                    user ? <button onClick={handleLogOut} className="btn btn-sm bg-[#403F3F] text-white hover:bg-slate-600">LogOut</button>
                        : <Link to='/login'><button className="btn btn-sm bg-[#403F3F] text-white hover:bg-slate-600">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;