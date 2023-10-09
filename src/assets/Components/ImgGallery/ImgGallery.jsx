import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './ImgGallery.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImgGallery = () => {
    return (
        <div>
            <h1 className="text-center text-3xl font-semibold mt-20">Gallery</h1>

            <div className="relative overflow-hidden rounded-b-md bg-no-repeat text-center bg-[url('https://i.ibb.co/Q95bFs5/alvaro-cvg-m-W8-IZd-X7n8-E-unsplash.jpg')] h-[450px] lg:h-[500px] bg-cover">
                <div className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3aaa]">

                    <div className="h-full flex justify-center items-center">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div>
                                    <div className=" p-3">
                                        <h1 className="text-2xl font-mono italic font-medium my-5 text-[#DAA97F]">Wedding</h1>
                                        <img className="rounded-lg w-full" src="https://i.ibb.co/DMdXVkN/victoria-priessnitz-JFAPl7br-L6-U-unsplash.jpg" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className=" p-3">
                                        <h1 className="text-2xl font-mono italic font-medium my-5 text-[#DAA97F]">Anniversary</h1>
                                        <img className="rounded-lg w-full" src="https://i.ibb.co/HP9SKbR/xiaoyu-li-R-7-I1-ut6-Ps-unsplash.jpg" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className=" p-3">
                                        <h1 className="text-2xl font-mono italic font-medium my-5 text-[#DAA97F]">Anniversary Party</h1>
                                        <img className="rounded-lg w-full" src="https://i.ibb.co/Q95bFs5/alvaro-cvg-m-W8-IZd-X7n8-E-unsplash.jpg" alt="" /></div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className=" p-3">
                                        <h1 className="text-2xl font-mono italic font-medium my-5 text-[#DAA97F]">Birthday</h1>
                                        <img className="rounded-lg w-full" src="https://i.ibb.co/KhQSfHw/sirio-hm3ef-UMo-Reg-unsplash.jpg" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className=" p-3">
                                        <h1 className="text-2xl font-mono italic font-medium my-5 text-[#DAA97F]">Baby Shower</h1>
                                        <img className="rounded-lg w-full" src="https://i.ibb.co/x1bjphL/douglas-j-s-moreira-UFd-Lg0-BX5a-M-unsplash.jpg" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className=" p-3">
                                        <h1 className="text-2xl font-mono italic font-medium my-5 text-[#DAA97F]">Retirement Party</h1>
                                        <img className="rounded-lg w-full" src="https://i.ibb.co/pK6hrYP/antenna-ZDN-G1x-BWHY-unsplash.jpg" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ImgGallery;