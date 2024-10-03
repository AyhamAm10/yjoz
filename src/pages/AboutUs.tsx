import CardAboutUs from "../component/AboutUs/CardAboutUs"
import HeroSection from "../component/AboutUs/HeroSection"
import img1 from "../assets/aboutUs/Icon.png"
import img2 from "../assets/aboutUs/Icon (1).png"
import img3 from "../assets/aboutUs/Icon (2).png"


const AboutUs:React.FC = () => {
  return (
    <div className="px-3 sm:px-5 md:px-10 lg:px-20 py-10 lg:max-w-[95rem] mx-auto xl:max-w-[120rem]  ">
      <HeroSection />
      <div className="my-10 md:my-20 grid grid-cols 1 md:grid-cols-2 gap-x-5 gap-y-8 ">
          <CardAboutUs img={img1} title="The issue" p="Ld eu aliquet diam lorem viverra at justo. Nulla odio nequefjf gravida in pharetra egestas. Ac id sagittis at morbi interdum nibh diam sagittis et." />
          <CardAboutUs img={img2} title="Our Objective" p="Ld eu aliquet diam lorem viverra at justo. Nulla odio nequefjf gravida in pharetra egestas. Ac id sagittis at morbi interdum nibh diam sagittis et." />
          <div className="md:col-span-2">
          <CardAboutUs img={img3} title="Playing Your Part" p="Renting on Yjoz isn’t just convenient and cost effective. But by buying less and renting more you’re also contributing to a circular economy, making better use of resources and helping to protect this wonderful planet we live on." btn="Browse Items" />

          </div>
      </div>
    </div>
  )
}

export default AboutUs