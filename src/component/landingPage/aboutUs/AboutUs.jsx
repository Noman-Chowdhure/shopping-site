import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState } from "react";
import { arrayOfOj } from "../../../utils/frienFunction";
import Counting from "../../shreadPage/Counting";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#aboutUs",
      pin: "#aboutUs",
      start: "top center",
      end: "+=500",
    });
  }, []);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % arrayOfOj.length);
  };

  const prevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + arrayOfOj.length) % arrayOfOj.length
    );
  };

  return (
    <div id="aboutUs" className="w-5/6 mx-auto px-28 py-10">
      <div className="top-heading border-b-[1px]">
        <h1 className="text-9xl capitalize font-safari text-zinc-300">
          explore
        </h1>
      </div>

      <div className="detils grid grid-cols-2">
        <div className="counting border-r-[1px] w-1/2">
          <Counting
            key={arrayOfOj[currentIndex].id}
            details={arrayOfOj[currentIndex].details}
            num={arrayOfOj[currentIndex].num}
          />
        </div>

        <div className="information grid grid-cols-6">
          <div className="child col-span-2 rounded-full">
            <img
              className=" rounded-full "
              src="https://i.pinimg.com/564x/6e/62/f6/6e62f6daffabd0670528a5ae0b7d61b9.jpg"
              alt=""
            />
          </div>
          <div className="child col-span-4">
            <img
              className=" rounded-full"
              src="https://i.pinimg.com/564x/26/2f/cf/262fcf53a4bc32631bcd0a5d57ff95bf.jpg"
              alt=""
            />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, culpa? Error nesciunt aperiam vero corporis sit. Porro nemo veritatis maiores, distinctio voluptatem a non! Aliquam, fugiat corporis. Odit, sapiente amet!</p>
          </div>
          <p className=" text-7xl text-orange-300 uppercase font-bold">collection!</p>
        </div>
      </div>

      <div className="navigation flex">
        <button
          onClick={prevItem}
          className="mr-4 w-20 h-20 flex items-center justify-center rounded-full border-[1px] border-zinc-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-orange-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </button>
        <button
          onClick={nextItem}
          className="mr-4 w-20 h-20 flex items-center justify-center  rounded-full border-[1px] border-zinc-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-orange-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
