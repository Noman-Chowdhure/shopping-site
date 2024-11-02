import AboutUs from "./aboutUs/AboutUs";
import Hero from "./hero/Hero";
import WinderCollection from "./winterCollection/WinderCollection";

const Landing = () => {
  return (
    <div className=" w-full h-full  overflow-hidden">
      <Hero></Hero>
      <WinderCollection></WinderCollection>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Landing;
