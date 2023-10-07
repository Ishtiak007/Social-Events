import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div className="max-w-[1470px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default MainLayout;