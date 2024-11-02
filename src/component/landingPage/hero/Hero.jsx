import LocomotiveScroll from "locomotive-scroll";

const Hero = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div id="hero" className=" w-full h-full">
      <div
        data-scroll
        data-scroll-speed="-.9"
        id="hero-body"
        className="body w-full h-screen grid md:grid-cols-2 grid-cols-1 justify-start justify-items-center items-center gap-10 md:gap-20"
      >
        <div className="text-content">
          <h1 className=" font-safari uppercase text-4xl">
            best collection only for you..
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
            officiis!
          </p>
          <button className=" btnn">click here to know more..</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
