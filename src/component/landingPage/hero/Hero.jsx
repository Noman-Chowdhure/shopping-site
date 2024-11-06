import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

import { useState } from "react";
import { Link } from "react-router-dom";
import { heroImg } from "../../../utils/frienFunction";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const [pro, setPro] = useState(0);
  const [current, setCurretn] = useState(0);
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

  const nextHead = () => {
    setCurretn((current) => (current + 1) % heroImg.length); // Add parentheses around current + 1
    setPro((pro) => pro == 3? 1: pro + 1);
  };
  
  const privious = () => {
    setCurretn((current) => (current - 1 + heroImg.length) % heroImg.length); // Same here, ensure proper wrapping
    setPro((pro) => pro == 1? 3: pro - 1);
  };
  
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
            className=" mix-blend-darken w-1/2 m-auto"
            src={heroImg[current].img}
            alt=""
          />

          <p id="heros" className=" text-zinc-400 md:text-[20vw] text-[5vw]">
            ari fode max
          </p>
        </div>

        <div className="social grid grid-cols-3   w-full justify-items-center">
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
            <p className=" font-safari">{pro}/ 03</p>
            <Link
              to="/product"
              className=" rounded-full  font-safari bg-zinc-800 text-white px-5 py-1 capitalize text-xl"
            >
              more product
            </Link>
            <div className="btn">
              <button onClick={privious}>
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
              <button onClick={nextHead}>
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
          <Link className=" btnn">buy product</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
