import { FaCommentDots, FaGlassCheers, FaHandshake, FaHome } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

import Marquee from "react-fast-marquee";

// Import Swiper styles
import './About.css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
const About = () => {
    return (
        <div>
            <div>
                <h1 className="lg:text-5xl text-2xl font-mono font-semibold text-center mt-6"><span className="text-orange-500">Hello!</span>We Are an <br></br> Event Planning Agency</h1>
                <p className="font-sans text-gray-500 text-lg text-center">We are your trusted partners in crafting unforgettable events. With a passion for creativity and a commitment<br></br> to excellence, we specialize in curating exceptional experiences tailored to your unique vision.As the premier event planning company<br></br> in New York City, we know that it’s not “one size fits all”. Each event and client is unique and we believe our services should be as well. We know that it should be “Can I hire a planner?” not “Can I afford one?”.</p>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 justify-around my-6 bg-slate-100 rounded-lg p-3">
                <div className="text-center">
                    <FaHome className="text-6xl text-orange-400 mx-auto my-4"></FaHome>
                    <p className="font-sans text-gray-500 text-lg text-center">Find the perfect venue for free</p>
                </div>
                <div className="">
                    <FaCommentDots className="text-6xl text-orange-400 mx-auto my-4"></FaCommentDots>
                    <p className="font-sans text-gray-500 text-lg text-center">Connect with the best vendor</p>
                </div>
                <div className="">
                    <FaHandshake className="text-6xl text-orange-400 mx-auto my-4"></FaHandshake>
                    <p className="font-sans text-gray-500 text-lg text-center">Let us help you with the event</p>
                </div>
                <div className="">
                    <FaGlassCheers className="text-6xl text-orange-400 mx-auto my-4"></FaGlassCheers>
                    <p className="font-sans text-gray-500 text-lg text-center">Enjoy the party with your friends</p>
                </div>
            </div>
            <div className="bg-[#F5F5F6] lg:h-[500px] ">

                <div>
                    <h1 className="text-center font-mono text-2xl font-semibold my-4">Our Staff</h1>
                    <p className="text-center text-orange-500 font-semibold font-sans">MEET OUR BEST TEAM</p>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide> <div>
                            <div>
                                <div className="w-[200px] h-[200px]">
                                    <img className=" rounded-full mx-auto" src="https://i.ibb.co/zXQmZJZ/IMG-20210618-180837.jpg" alt="" />

                                </div>
                                <h1 className="text-center text-2xl font-sans text-gray-800 font-semibold">Ishtiak Ahmed</h1>
                                <p className="font-sans text-gray-500 text-lg text-center">Director and CEO</p>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div>
                                    <div className="w-[200px] h-[200px]">
                                        <img className=" rounded-full mx-auto" src="https://i.ibb.co/hgxdBR6/pexels-andrea-piacquadio-712513.jpg" alt="" />

                                    </div>
                                    <h1 className="text-center text-2xl font-sans text-gray-800 font-semibold">Washifa Ashtha</h1>
                                    <p className="font-sans text-gray-500 text-lg text-center">Assistant Of CEO</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div>
                                    <div className="w-[200px] h-[200px]">
                                        <img className=" rounded-full mx-auto" src="https://i.ibb.co/qnNWxbf/pexels-italo-melo-2379004.jpg" alt="" />

                                    </div>
                                    <h1 className="text-center text-2xl font-sans text-gray-800 font-semibold">Jubair Al Sabbir</h1>
                                    <p className="font-sans text-gray-500 text-lg text-center">Event Planner</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div>
                                    <div className="w-[200px] h-[200px]">
                                        <img className=" rounded-full mx-auto" src="https://i.ibb.co/NywsDtr/pexels-andrea-piacquadio-874158.jpg" alt="" />

                                    </div>
                                    <h1 className="text-center text-2xl font-sans text-gray-800 font-semibold">Imtiaz Ahmed</h1>
                                    <p className="font-sans text-gray-500 text-lg text-center">Banquet Manager</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div>
                                <div>
                                    <div className="w-[200px] h-[200px]">
                                        <img className=" rounded-full mx-auto" src="https://i.ibb.co/fdcR49K/pexels-stefan-stefancik-91227.jpg" alt="" />

                                    </div>
                                    <h1 className="text-center text-2xl font-sans text-gray-800 font-semibold">Minhaz Hossin Rabid</h1>
                                    <p className="font-sans text-gray-500 text-lg text-center">Cameraman</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>

                            <div>
                                <div>
                                    <div className="w-[200px] h-[200px]">
                                        <img className=" rounded-full mx-auto" src="https://i.ibb.co/N6SpJsN/pexels-moose-photos-1036622.jpg" alt="" />

                                    </div>
                                    <h1 className="text-center text-2xl font-sans text-gray-800 font-semibold">Tashfia Rahman</h1>
                                    <p className="font-sans text-gray-500 text-lg text-center">Decoration Planner</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
            <div>
                <h1 className="text-center text-2xl font-semibold my-4">Our Clients</h1>
                <p className="text-center text-orange-500 font-semibold font-sans">WE ASSIST THEM ALL</p>
                <Marquee>
                    <div className="m-4">
                        <img className="w-20" src="https://i.ibb.co/YRsDFHz/images.png" alt="" />
                    </div>
                    <div className="m-4">
                        <img className="w-20" src="https://i.ibb.co/xLysmvS/images-1.png" alt="" />
                    </div>
                    <div className="m-4">
                        <img className="w-20" src="https://i.ibb.co/gSSMTm5/images-2.png" alt="" />
                    </div>
                    <div className="m-4">
                        <img className="w-20" src="https://i.ibb.co/jZ9BnX5/images-3.png" alt="" />
                    </div>
                    <div className="m-4">
                        <img className="w-20" src="https://i.ibb.co/71FcYNX/images-4.png" alt="" />
                    </div>
                    <div className="m-4">
                        <img className="w-20" src="https://i.ibb.co/mXDC0hH/images.jpg" alt="" />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default About;