<div className="md:flex md:flex-row flex-row-reverse">
<div className="flex-1 flex justify-end items-center text-left p-2">
    <div>
        <h1 className="md:text-3xl font-medium">{title_two}</h1>
        <p className="my-3">{details}</p>
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
<div className="md:flex">
<div className="flex-1 flex justify-center items-center">
    <div>
        <div className="w-full">
            <div className="relative w-[270px]">
                <img className="rounded-lg shadow-lg" src={five_images[5]} alt="" />
                <img className="w-[130px] absolute -bottom-10 -right-12 rounded-lg shadow-2xl shadow-gray-900" src={five_images[1]} alt="" />
                <img className="w-[150px] absolute -bottom-10 -left-10 rounded-lg shadow-2xl shadow-gray-900" src={five_images[4]} alt="" />
            </div>
        </div>
    </div>
</div>
<div className="flex-1 flex justify-start items-center text-left p-2">
    <div>
        <p className="my-3">{details_two}</p>
    </div>
</div>
</div>