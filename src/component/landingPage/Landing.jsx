import Slider from "../shreadPage/Slider";
import AboutUs from "./aboutUs/AboutUs";
import Clint from "./clint/Clint";
import Hero from "./hero/Hero";
import Paster from "./postetPage/Paster";
import Why from "./why/Why";
import WinderCollection from "./winterCollection/WinderCollection";

const Landing = () => {
  return (
    <div className=" w-full h-full">
      <Hero></Hero>
      <WinderCollection></WinderCollection>
      <AboutUs></AboutUs>
      <Why></Why>
      <Slider></Slider>
      <Clint></Clint>
      <Paster></Paster>
    </div>
  );
};

export default Landing;
