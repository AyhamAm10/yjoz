
import img from "../../assets/home/MOCKUP.png"
import googlePlay from "../../assets/home/playstore-svgrepo-com 1.png"
import appStore from "../../assets/home/app-store-svgrepo-com 1.png"
import huawei from "../../assets/home/huawei-appgallery-seeklogo 1.png"
import BtnPartners from "./BtnPartners";
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
            <div className="md:w-[50%] flex flex-col gap-5 sm:gap-10">
                <h1 className="text-[#828283] text-xl sm:text-3xl md:text-7xl font-semibold "><span className="text-gradient">Download</span>  YJOZ APP</h1>
                <p className="text-p  text-2xl">Lorem ipsum dolor sit amet consectetur. Faucibus lacus interdum urna ornare phasellus lorem sit imperdiet gravida. Erat feugiat mollis egestas nulla commodo felis vehicula a risus. Mi morbi pellentesque urna fermentum suscipit nulla in non. Arcu at euismod morbi dolor ultrices et orci orci at.</p>
                <div className="flex flex-col gap-5 sm:flex-row justify-between">
                  <BtnPartners img={googlePlay} name="Google Play" title="GET IT ON" border="#D93F21"  />
                  <BtnPartners img={appStore} name="Google Play" title="GET IT ON" border="#2068EC" />
                  <BtnPartners img={huawei} name="Google Play" title="GET IT ON" border="#E14459" />
                </div>
            </div>
            <div >
                <img src={img} alt="MOCKUP" className="w-full " />
            </div>
      </div>
    </div>
  );
};

export default Partners;
