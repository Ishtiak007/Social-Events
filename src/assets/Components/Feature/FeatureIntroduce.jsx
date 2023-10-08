import { FaBirthdayCake, FaCameraRetro, FaGlassCheers } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const FeatureIntroduce = () => {
    return (
        <div>
            <div className="h-[60vh] my-10 p-5">
                <div data-aos="fade-up"
                    data-aos-duration="3000">
                    <h1 className="lg:text-5xl text-3xl font-serif text-left mb-8">No-fuss event management to<br></br> celebrate the big day</h1>
                </div>
                <div className="md:flex justify-between mt-10 p-5" >
                    <div data-aos="fade-up-left">
                        <FaBirthdayCake className="text-6xl text-orange-400"></FaBirthdayCake>
                        <h1 className="font-sans text-xl font-semibold text-gray-500 my-3">PERFECT VENUE</h1>
                        <p className="font-sans text-base font-medium text-slate-600">No one will arrange a better<br></br> party or event than we</p>
                        <Link to='/feature'><button className="text-orange-300 underline font-semibold my-5">Learn More</button></Link>
                    </div>
                    <div data-aos="fade-up-right">
                        <IoFastFoodOutline className="text-6xl text-orange-400"></IoFastFoodOutline>
                        <h1 className="font-sans text-xl font-semibold text-gray-500 my-3">FOOD & CATERING</h1>
                        <p className="font-sans text-base font-medium text-slate-600">The best food from the most<br></br> famous restaurants</p>
                        <Link to='/feature'><button className="text-orange-300 underline font-semibold my-5">Learn More</button></Link>
                    </div>
                    <div data-aos="fade-up-left">
                        <FaGlassCheers className="text-6xl text-orange-400"></FaGlassCheers>
                        <h1 className="font-sans text-xl font-semibold text-gray-500 my-3">ENTERTAINMENT</h1>
                        <p className="font-sans text-base font-medium text-slate-600">Unforgettable entertainment,<br></br> interesting programs</p>
                        <Link to='/feature'><button className="text-orange-300 underline font-semibold my-5">Learn More</button></Link>
                    </div>
                    <div data-aos="fade-up-right">
                        <FaCameraRetro className="text-6xl text-orange-400"></FaCameraRetro>
                        <h1 className="font-sans text-xl font-semibold text-gray-500 my-3">OTHER SERVICES</h1>
                        <p className="font-sans text-base font-medium text-slate-600">And many more things that<br></br> we can offer you</p>
                        <Link to='/feature'><button className="text-orange-300 underline font-semibold my-5">Learn More</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeatureIntroduce;