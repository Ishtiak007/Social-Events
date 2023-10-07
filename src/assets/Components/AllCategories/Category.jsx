import PropTypes from 'prop-types';
const Category = ({ category }) => {
    const { title, title_image, description } = category
    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={title_image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-5">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {description}
                    </p>
                    <a className="inline-block" href="#">
                        <button className='btn bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold'>
                            Explore More
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};
Category.propTypes = {
    category: PropTypes.object
};
export default Category;