import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <div>
            <div>
                <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
                    <div>
                        <div
                            className="relative overflow-hidden rounded-b-md bg-no-repeat text-center bg-[url('https://i.ibb.co/3ytp7sZ/carlo-buttinoni-l-KCp-UYu2-TDk-unsplash.jpg')] h-[200px] lg:h-[600px] bg-cover">
                            <div
                                className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3aaa]">
                                <div className="flex h-full items-center justify-center">
                                    <div>
                                        <div>
                                            <h1 className="text-white lg:text-5xl text-[18px] my-[30px] font-semibold font-serif">The living moment is everything</h1>
                                            <Link to='/service' className="bg-gradient-to-r from-orange-400 to-orange-600 px-3 py-2 text-white font-semibold text-lg">Let's Celebrate</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="relative overflow-hidden rounded-b-md bg-no-repeat text-center bg-[url('https://i.ibb.co/vPNqWqK/happy-friends-with-birthday-cake-1.jpg')] h-[200px] lg:h-[600px] bg-cover">
                            <div
                                className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3aaa]">
                                <div className="flex h-full items-center justify-center">
                                    <div>
                                        <div>
                                            <h1 className="text-white lg:text-5xl text-[18px]  my-[30px] font-semibold font-serif">The living moment is everything</h1>
                                            <Link to='/service' className="bg-gradient-to-r from-orange-400 to-orange-600 px-3 py-2 text-white font-semibold text-lg">Let's Celebrate</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="relative overflow-hidden rounded-b-md bg-no-repeat text-center bg-[url('https://i.ibb.co/DMdXVkN/victoria-priessnitz-JFAPl7br-L6-U-unsplash.jpg')] h-[200px] lg:h-[600px] bg-cover">
                            <div
                                className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3aaa]">
                                <div className="flex h-full items-center justify-center">
                                    <div>
                                        <div>
                                            <h1 className="text-white lg:text-5xl text-[18px]  my-[30px] font-semibold font-serif">The living moment is everything</h1>
                                            <Link to='/service' className="bg-gradient-to-r from-orange-400 to-orange-600 px-3 py-2 text-white font-semibold text-lg">Lets Celebrate</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="relative overflow-hidden rounded-b-md bg-no-repeat text-center bg-[url('https://i.ibb.co/2kJPw1S/priscilla-du-preez-W3-SEy-ZODn8-U-unsplash-1.jpg')] h-[200px] lg:h-[600px] bg-cover">
                            <div
                                className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3aaa]">
                                <div className="flex h-full items-center justify-center">
                                    <div>
                                        <div>
                                            <h1 className="text-white lg:text-5xl text-[18px]  my-[30px] font-semibold font-serif">The living moment is everything</h1>
                                            <Link to='/service' className="bg-gradient-to-r from-orange-400 to-orange-600 px-3 py-2 text-white font-semibold text-lg">Let's Celebrate</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="relative overflow-hidden rounded-b-md bg-no-repeat text-center bg-[url('https://i.ibb.co/GsPLGY6/bulbul-ahmed-d6-L7-Iq0eq-Bs-unsplash.jpg')] h-[200px] lg:h-[600px] bg-cover">
                            <div
                                className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3aaa]">
                                <div className="flex h-full items-center justify-center">
                                    <div>
                                        <div>
                                            <h1 className="text-white lg:text-5xl text-[18px] my-[30px] font-semibold font-serif">The living moment is everything</h1>
                                            <Link to='/service' className="bg-gradient-to-r from-orange-400 to-orange-600 px-3 py-2 text-white font-semibold text-lg">Let's Celebrate</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>

        </div>
    );

};

export default Banner;