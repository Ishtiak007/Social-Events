import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " font-semibold text-[18px] underline" : "text-white font-semibold text-[18px]"
        } to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " font-semibold text-[18px] underline" : "text-white font-semibold text-[18px]"
        } to='/service'>Service</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " font-semibold text-[18px] underline" : "text-white font-semibold text-[18px]"
        } to='/feature'>Feature</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " font-semibold text-[18px] underline" : "text-white font-semibold text-[18px]"
        } to='/about'>About</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " font-semibold text-[18px] underline" : "text-white font-semibold text-[18px]"
        } to='/login'>Login</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " font-semibold text-[18px] underline" : "text-white font-semibold text-[18px]"
        } to='/register'>Register</NavLink></li>
    </>
    return (
        <div className="navbar bg-[#444343a5] mt-5 rounded-t-md sticky inset-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="border p-1 shadow-lg"><span className="md:text-3xl font-bold italic">Social</span><span className="md:text-3xl font-bold text-orange-600 italic">Events</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="px-4 py-1  font-bold bg-gradient-to-r from-orange-100 to-orange-300 rounded-md">LogOut</Link>
            </div>
        </div>
    );
};

export default Navbar;