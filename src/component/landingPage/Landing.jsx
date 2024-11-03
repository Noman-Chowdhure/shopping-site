import AboutUs from "./aboutUs/AboutUs";
import Dummy from "./aboutUs/Dummy";
import Hero from "./hero/Hero";
import WinderCollection from "./winterCollection/WinderCollection";

const Landing = () => {
  return (
    <div className=" w-full h-full  overflow-hidden">
      <Hero></Hero>
      <WinderCollection></WinderCollection>
      <AboutUs></AboutUs>
      <Dummy></Dummy>
    </div>
  );
};

export default Landing;
