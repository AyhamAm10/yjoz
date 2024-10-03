import React from "react";
import img from "../../assets/aboutUs/about 1.png";
const HeroSection: React.FC = () => {
  const str: string =
    "YJOZ, an innovative mobile application, is leading the change in reshaping the rental landscape in the UAE. Serving as a comprehensive marketplace, it empowers individuals and businesses to list a diverse range of rental items and services. Positioned as the pioneering sustainable brand in the GCC and Middle East, YJOZ specializes in delivering rental services with a clear focus on waste reduction and item reuse. By actively promoting a circular economy, YJOZ seeks to minimize the environmental impact of excessive consumption. YJOZ sets a precedent for sustainable practices, inspiring individuals, and businesses to embrace eco-friendly approaches by highlighting the advantages of renting over traditional ownership. Through this, YJOZ contributes to creating a more sustainable and environmentally friendly society in the GCC and Middle East.";

  return (
    <div className="flex-center">
      <div className=" grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-10 items-center">
        <div>
            <img src={img} alt="about us img" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-dark text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            Experience <span className="text-green">Sustainability</span>
          </h1>
          <h1 className="text-dark text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            effortlessly with <span className="text-red">YJOZ</span>
          </h1>
          <p className="text-[#525C60] text-sm md:text-2xl ">
            {
            str.split(" ").map((word:string , ind:number)=>(
                <span key={ind} className={`${word == "YJOZ" ?  "text-yalwe" :""  } ${ind == 0 ? "text-red" :""}`}>
                    {word}
                    <span> </span>
                </span>
                
            ))
            }
            </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
