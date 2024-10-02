import React from "react";
import img from "../../assets/home/MOCKUP.png"
const Partners = () => {
  return (
    <div>
      <div className="flex-center">
        <button className="px-8 py-4 rounded-[0.5rem] text-red cursor-pointer bg-[#FFC21B1A] text-sm font-medium ">
        PARTNERS OF SUCCESS
        </button>
      </div>
      <h2 className="text-center text-3xl font-bold my-10 text-dark">
      Success partners trust us
      </h2>
      <div className="flex flex-col-reverse md:flex-row items-center px-5 sm:px-9 lg:px-20  gap-4 sm:gap-6 mdLgap-10 lg:gap-20">
            <div className="w-[60%] flex flex-col gap-5 sm:gap-10">
                <h1 className="text-[#828283] text-xl sm:text-3xl md:text-7xl font-semibold "><span className="text-gradient">Download</span>  YJOZ APP</h1>
                <p className="text-p text-2xl">Lorem ipsum dolor sit amet consectetur. Faucibus lacus interdum urna ornare phasellus lorem sit imperdiet gravida. Erat feugiat mollis egestas nulla commodo felis vehicula a risus. Mi morbi pellentesque urna fermentum suscipit nulla in non. Arcu at euismod morbi dolor ultrices et orci orci at.</p>
            </div>
            <div >
                <img src={img} alt="MOCKUP" className="w-full " />
            </div>
      </div>
    </div>
  );
};

export default Partners;
