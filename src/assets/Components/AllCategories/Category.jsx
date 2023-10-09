import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Category = ({ category }) => {
    const { id, title, title_image, description } = category
    return (
        <div className='overflow-x-clip'>
            <div className="relative flex md:max-w-[48rem] lg:flex-row md:flex-row flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 lg:w-2/5 md:w-2/5 shrink-0 overflow-hidden rounded-xl lg:rounded-r-none md:rounded-r-none bg-white bg-clip-border text-gray-700" data-aos="zoom-out-right">
                    <img
                        src={title_image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-5" data-aos="zoom-out-left">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {description}
                    </p>
                    <div className="inline-block" href="#">
                        <Link to={`/category/${id}`}><button className='btn bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold'>
                            Explore More
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};
Category.propTypes = {
    category: PropTypes.object
};
export default Category;