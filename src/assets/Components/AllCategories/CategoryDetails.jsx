import { useLoaderData, useParams } from "react-router-dom";
import ImgGallery from "../ImgGallery/ImgGallery";

const CategoryDetails = () => {
    const allData = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const data = allData.find(data => data.id === idInt);
    const { details, banner_image, category, five_images, title_two, details_two } = data;
    return (
        <div>
            <div style={{ '--image-url': `url(${banner_image})` }}
                className='bg-[image:var(--image-url)] relative overflow-hidden rounded-b-md bg-no-repeat text-center h-[200px] lg:h-[600px] bg-cover'>
                <div className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3ac4]">
                    <div className="w-full h-full flex justify-center items-center">
                        <h1 className="text-white text-4xl font-semibold font-serif">{category}</h1>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <div className="md:flex">
                    <div className="flex-1 flex justify-end items-center text-left p-2">
                        <div>
                            <div>
                                <h1 className="md:text-3xl font-semibold text-[#0B0223]">{title_two}</h1>
                                <p className="my-3 text-[#534C64] text-xl">{details}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div className="relative w-[270px]">
                            <img className="w-[150px] absolute top-5 -right-12 rounded-lg shadow-2xl shadow-gray-900" src={five_images[0]} alt="" />
                            <img className="w-[130px] absolute top-10 -left-10 rounded-lg shadow-2xl shadow-gray-900" src={five_images[1]} alt="" />
                            <img className="rounded-lg shadow-lg" src={five_images[2]} alt="" />
                        </div>
                    </div>
                </div>
                <div className="md:flex flex-row-reverse">
                    <div className="flex-1 flex justify-end items-center text-left p-2">
                        <div>
                            <div>
                                <p className="my-3 text-[#534C64] text-xl">{details_two}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div className="relative w-[270px]">
                            <img className="rounded-lg shadow-lg" src={five_images[5]} alt="" />
                            <img className="w-[130px] absolute -bottom-10 -right-12 rounded-lg shadow-2xl shadow-gray-900" src={five_images[1]} alt="" />
                            <img className="w-[150px] absolute -bottom-10 -left-10 rounded-lg shadow-2xl shadow-gray-900" src={five_images[4]} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;