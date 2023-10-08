import { FaClock, FaLocationArrow, FaRegCalendarCheck } from "react-icons/fa6";
import Register from "../Register/Register";
import { FaMobileAlt } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div>
            <div className="relative overflow-hidden rounded-b-md bg-no-repeat text-center bg-[url('https://i.ibb.co/NjZrHfc/pexels-chevanon-photography-323503.jpg')] h-[200px] lg:h-[600px] bg-cover">
                <div className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3aaa]">
                    <div className="h-full flex justify-center items-center">
                        <h1 className="text-3xl font-serif font-extrabold text-white">Contact Us</h1>
                    </div>

                </div>
            </div >
            <div className="lg:flex flex-row-reverse">
                <div className="flex-1 flex justify-center items-center mx-auto">
                    <div className="grid lg:grid-cols-2 gap-5 justify-center">
                        <div>
                            <FaLocationArrow className="text-orange-500 text-5xl"></FaLocationArrow>
                            <h1 className="font-serif text-slate-600 text-xl font-semibold my-2">Postal Address</h1>
                            <p className="font-serif text-slate-500 text-xl">Unica Event Agency 85</p>
                            <p className="font-serif text-slate-500 text-xl my-2">Fentiman Ave Ottawa, ON K18</p>
                        </div>
                        <div>
                            <FaClock className="text-orange-500 text-5xl"></FaClock>
                            <h1 className="font-serif text-slate-600 text-xl font-semibold my-2">Open Hours</h1>
                            <p className="font-serif text-slate-500 text-xl">Monday - Friday</p>
                            <p className="font-serif text-slate-500 text-xl my-2">8:00 am - 5:00 pm</p>
                        </div>
                        <div>
                            <FaMobileAlt className="text-orange-500 text-5xl"></FaMobileAlt>
                            <h1 className="font-serif text-slate-600 text-xl font-semibold my-2">Phone & Email</h1>
                            <p className="font-serif text-slate-500 text-xl">Phone : 01737223990</p>
                            <p className="font-serif text-slate-500 text-xl my-2">Email : ishtiak.sparrow98@gmail.com</p>
                        </div>
                        <div>
                            <FaRegCalendarCheck className="text-orange-500 text-5xl"></FaRegCalendarCheck>
                            <h1 className="font-serif text-slate-600 text-xl font-semibold my-2">Morning : 8am - 12am</h1>
                            <p className="font-serif text-slate-500 text-xl">Afternoons : 1pm - 5 pm , Full</p>
                            <p className="font-serif text-slate-500 text-xl my-2">Day : 8am - 5pm</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 my-7">
                    <Register></Register>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;