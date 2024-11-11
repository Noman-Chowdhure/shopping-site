import Slider from "../shreadPage/Slider";
import AboutUs from "./aboutUs/AboutUs";
import Clint from "./clint/Clint";
import Hero from "./hero/Hero";
import Paster from "./postetPage/Paster";
import WinderCollection from "./winterCollection/WinderCollection";

const Landing = () => {
  return (
    <div className=" w-full h-full  overflow-hidden">
      <Hero></Hero>
      {/* <WinderCollection></WinderCollection> */}
      <AboutUs></AboutUs>
      <Slider></Slider>
      <Clint></Clint>
      <Paster></Paster>
    </div>
  );
};

export default Landing;
