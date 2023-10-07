const WelcomeSection = () => {
    return (
        <div className="p-4 my-10">
            <div className="lg:flex">
                <div className="flex-1 flex justify-center items-center text-center p-2">
                    <div>
                        <h1 className="md:text-5xl font-medium"><span className="text-orange-400">Hello!</span> We Are an Event Planning Agency</h1>
                        <p className="my-3">As the premier event planning company in the area, we know that it’s not “one size fits all”. Each event and client is unique and we believe our services should be as well. We know that it should be “Can I hire a planner?” not “Can I afford one?”.......Come on,lets celebrate together</p>
                        <h2 className="italic text-3xl my-9">We take care of preparation, you enjoy the celebration! <span className="text-lg font-bold text-[#D7A477]">HELLO & WELCOME . . .</span></h2>
                    </div>

                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div>
                        <div className="w-full">
                            <div className="relative w-[300px]">
                                <img className="w-[160px] absolute top-5 -right-12 rounded-lg shadow-2xl shadow-gray-900" src="https://i.ibb.co/L9pzZx0/happy-friends-with-birthday-cake-1.jpg" alt="" />
                                <img className="w-[180px] absolute top-10 -left-10 rounded-lg shadow-2xl shadow-gray-900" src="https://i.ibb.co/NTzKqfd/al-elmes-ULHx-Wq8reao-unsplash.jpg" alt="" />
                                <img className="rounded-lg shadow-lg" src="https://i.ibb.co/gPwxXG5/karsten-winegeart-o8tnv-Y9i-B3-E-unsplash.jpg" alt="" />
                                <img className="w-[150px] absolute -bottom-10 -right-12 rounded-lg shadow-2xl shadow-gray-900" src="https://i.ibb.co/YLgm9MF/ivan-kazlouskij-lplt-N2-Wd-I2-Q-unsplash.jpg" alt="" />
                                <img className="w-[170px] absolute -bottom-10 -left-10 rounded-lg shadow-2xl shadow-gray-900" src="https://i.ibb.co/tKm07VN/alvaro-cvg-m-W8-IZd-X7n8-E-unsplash.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default WelcomeSection;