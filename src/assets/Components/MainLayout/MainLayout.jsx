import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-[1470px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default MainLayout;