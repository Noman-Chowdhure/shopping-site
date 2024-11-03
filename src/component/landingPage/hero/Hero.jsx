import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

import { useState } from "react";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const [pro, setPro] = useState(0);
  const locomotiveScroll = new LocomotiveScroll();
  useGSAP(() => {
    gsap.to("#heros", {
      scale: 2,
      duration: 2.3,
      scrollTrigger: {
        trigger: "#heros",
        scroller: "#hero",
        start: "top 4%",
        end: "top -100%",
      },
    });
  }, []);
  return (
    <div id="hero" className=" w-full h-full">
      <div
        data-scroll
        data-scroll-speed="-.9"
        id="hero-body"
        className="body w-full h-screen grid grid-cols-1 justify-start justify-items-center items-center gap-10 md:gap-20"
      >
        <div className="text-content">
          <img
            className=" mix-blend-darken"
            src="https://i.pinimg.com/564x/e4/3a/cf/e43acf173248479d88f5abc007b8d3b8.jpg"
            alt=""
          />
          <p id="heros" className=" text-zinc-400">
            ari fode max
          </p>
        </div>


        <div className="social grid grid-cols-3  w-full justify-items-center">

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          </button>


          <div className="more-proudct flex gap-x-10 items-center">
            <p>{pro}/ 04</p>
            <Link className=" rounded-full bg-zinc-800 text-white px-5 py-1 capitalize text-xl">
              more product
            </Link>
            <div className="btn">
              <button onClick={() => setPro((count) => count - 1)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                  />
                </svg>
              </button>
              <button
                onClick={() => setPro((count) => (count === 4 ? 0 : count + 1))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <Link className=" btnn">
            buy product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
