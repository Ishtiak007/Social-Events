import { Carousel } from "react-responsive-carousel";

const ImgGallery = () => {
    return (
        <div>
            <h1 className="text-center text-3xl font-semibold mt-20">Gallery</h1>
            <Carousel showStatus={false} centerMode autoPlay infiniteLoop thumbWidth={80} className="max-w-6xl mx-auto">
                <div className=" p-3">
                    <h1 className="text-2xl font-mono italic font-medium my-5 text-[#DAA97F]">Wedding</h1>
                    <img className="rounded-lg w-full" src="https://i.ibb.co/DMdXVkN/victoria-priessnitz-JFAPl7br-L6-U-unsplash.jpg" alt="" />
                </div>
                <div className=" p-3">
                    <h1 className="text-2xl font-mono italic font-medium my-5 text-[#DAA97F]">Anniversary</h1>
                    <img className="rounded-lg w-full" src="https://i.ibb.co/HP9SKbR/xiaoyu-li-R-7-I1-ut6-Ps-unsplash.jpg" alt="" />
                </div>
                <div className=" p-3">
                    <h1 className="text-2xl font-mono italic font-medium my-5 text-[#DAA97F]">Anniversary Party</h1>
                    <img className="rounded-lg w-full" src="https://i.ibb.co/Q95bFs5/alvaro-cvg-m-W8-IZd-X7n8-E-unsplash.jpg" alt="" /></div>
                <div className=" p-3">
                    <h1 className="text-2xl font-mono italic font-medium my-5 text-[#DAA97F]">Birthday</h1>
                    <img className="rounded-lg w-full" src="https://i.ibb.co/KhQSfHw/sirio-hm3ef-UMo-Reg-unsplash.jpg" alt="" />
                </div>
                <div className=" p-3">
                    <h1 className="text-2xl font-mono italic font-medium my-5 text-[#DAA97F]">Baby Shower</h1>
                    <img className="rounded-lg w-full" src="https://i.ibb.co/x1bjphL/douglas-j-s-moreira-UFd-Lg0-BX5a-M-unsplash.jpg" alt="" />
                </div>
                <div className=" p-3">
                    <h1 className="text-2xl font-mono italic font-medium my-5 text-[#DAA97F]">Retirement Party</h1>
                    <img className="rounded-lg w-full" src="https://i.ibb.co/pK6hrYP/antenna-ZDN-G1x-BWHY-unsplash.jpg" alt="" />
                </div>
            </Carousel>
        </div>
    );
};

export default ImgGallery;