import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-[1500px] mx-auto">
            <Navbar className="sticky top-0"></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;