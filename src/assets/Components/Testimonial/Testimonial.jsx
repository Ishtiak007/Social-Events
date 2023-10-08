import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Testimonial.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonial = () => {
    return (
        <div>
            <div className="relative overflow-hidden rounded-b-md bg-no-repeat text-center bg-[url('https://i.ibb.co/VM2tR9D/adi-goldstein-Hli3-R6-LKibo-unsplash.jpg')] h-[450px] lg:h-[500px] bg-cover">
                <div className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3aaa]">

                    <h1 className='text-white text-3xl font-mono font-semibold my-4'>Testimonials</h1>
                    <p className='text-yellow-300 text-lg font-mono'>Happy well wisher about us</p>

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
                                slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div>
                                    <div className="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                        <div className="p-6">
                                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                                ❝Perfect decoration and perfect buffect for my sisters birthday party❞
                                            </p>
                                            <div className="w-[70px] mx-auto">
                                                <img className="w-full rounded-full" src="https://i.ibb.co/kcMtfS4/courtney-cook-TSZo17r3m0s-unsplash.jpg" alt="" />
                                            </div>
                                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                Most Shinaa
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                        <div className="p-6">
                                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                                ❝I invited these event planner to arrange a bachelor party for my best friend❞
                                            </p>
                                            <div className="w-[70px] mx-auto">
                                                <img className="w-full rounded-full" src="https://i.ibb.co/k8JKv55/alex-suprun-ZHv-M3-XIOHo-E-unsplash.jpg" alt="" />
                                            </div>
                                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                Minhaz Hossian Rabid
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                        <div className="p-6">
                                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                                ❝Look no further! You are in the right place to plan your celebration❞
                                            </p>
                                            <div className="w-[70px] mx-auto">
                                                <img className="w-full rounded-full" src="https://i.ibb.co/7VgtFyq/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg" alt="" />
                                            </div>
                                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                Jahid Hasan Ridoy
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                        <div className="p-6">
                                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                                ❝Handled our conference expertly—impressive logistics, exceeded expectations. Exceptional professionalism and organization.❞
                                            </p>
                                            <div className="w-[70px] mx-auto">
                                                <img className="w-full rounded-full" src="https://i.ibb.co/dBsJzxk/linkedin-sales-solutions-p-At-A8xe-i-VM-unsplash.jpg" alt="" />
                                            </div>
                                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                Mr. Imtiaz Ahmed
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                        <div className="p-6">
                                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                                ❝Perfect send-off, added creative touch, impressive decor. Allowed us to celebrate effortlessly. Exceptional event.❞
                                            </p>
                                            <div className="w-[70px] mx-auto">
                                                <img className="w-full rounded-full" src="https://i.ibb.co/Gs0hNLZ/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg" alt="" />
                                            </div>
                                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                Adib Al Farshi
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                        <div className="p-6">
                                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                                ❝Handled our conference expertly—impressive logistics, exceeded expectations. Exceptional professionalism and organization.❞
                                            </p>
                                            <div className="w-[70px] mx-auto">
                                                <img className="w-full rounded-full" src="https://i.ibb.co/j6RNM6B/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg" alt="" />
                                            </div>
                                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                Ashtha Yeamin
                                            </h5>
                                        </div>
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

export default Testimonial;