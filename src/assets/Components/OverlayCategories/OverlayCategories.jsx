import './OverlayCategories.css';
const OverlayCategories = () => {
    return (
        <div className='bg-slate-100 p-5 rounded-xl'>
            <h1 className='text-center my-5 text-3xl font-serif font-bold'>Category Over view</h1>
            <div>
                <div className="md:flex justify-evenly">
                    <div className="relative lg:w-[350px] md:w-[200px]">
                        <img className='w-full rounded-lg' src="https://i.ibb.co/DMdXVkN/victoria-priessnitz-JFAPl7br-L6-U-unsplash.jpg" alt="" />
                        <div className="content">
                            <h1>Wedding</h1>
                            <p>Crafting Your Unique Wedding Experience</p>
                        </div>

                    </div>
                    <div className="relative lg:w-[350px] md:w-[200px]">
                        <img className='w-full  rounded-lg' src="https://i.ibb.co/HP9SKbR/xiaoyu-li-R-7-I1-ut6-Ps-unsplash.jpg" alt="" />
                        <div className="content">
                            <h1>Anniversary</h1>
                            <p>Celebrating Your Marriage Milestones</p>
                        </div>

                    </div>
                    <div className="relative lg:w-[350px] md:w-[200px]">
                        <img className='w-full  rounded-lg' src="https://i.ibb.co/Q95bFs5/alvaro-cvg-m-W8-IZd-X7n8-E-unsplash.jpg" alt="" />
                        <div className="content">
                            <h1>Engagement</h1>
                            <p> Celebrating the Next Chapter</p>
                        </div>

                    </div>
                </div>
                <div className='md:flex justify-evenly mt-6'>
                    <div className="relative lg:w-[350px] md:w-[200px]">
                        <img className='w-full  rounded-lg' src="https://i.ibb.co/KhQSfHw/sirio-hm3ef-UMo-Reg-unsplash.jpg" alt="" />
                        <div className="content">
                            <h1>Birthday</h1>
                            <p> Honoring Your Past, Creating Your Future</p>
                        </div>

                    </div>
                    <div className="relative lg:w-[350px] md:w-[200px]">
                        <img className='w-full  rounded-lg' src="https://i.ibb.co/x1bjphL/douglas-j-s-moreira-UFd-Lg0-BX5a-M-unsplash.jpg" alt="" />
                        <div className="content">
                            <h1>Baby Shower</h1>
                            <p>Creative Ideas for a Unique Celebration</p>
                        </div>

                    </div>
                    <div className="relative lg:w-[350px] md:w-[200px]">
                        <img className='w-full  rounded-lg' src="https://i.ibb.co/pK6hrYP/antenna-ZDN-G1x-BWHY-unsplash.jpg" alt="" />
                        <div className="content">
                            <h1>Retirement Party</h1>
                            <p>Planning a Retirement Celebration</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverlayCategories;