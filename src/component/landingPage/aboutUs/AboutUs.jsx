import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState } from "react";
import Counting from "../../shreadPage/Counting";
import { arrayOfOj } from "../../../utils/frienFunction";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.from("#aboutUs", {
      opacity: 0,
      duration: 2.5,
      delay: 2.5,
      scale: 0,
      scrollTrigger: {
        trigger: "#aboutUs",
        scroller: "#aboutUs",
        start: "top 2%",
        end: "top -100%",
      },
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
    <div id="aboutUs" className="w-5/6 mx-auto bg-zinc-800 px-28 py-10">

      <div className="top-heading border-b-[1px] border-zinc-600">
        <h1 className="text-9xl capitalize font-safari text-zinc-300">
          explore
        </h1>
      </div>

      <div className="detils grid grid-cols-2">
        <div className="counting border-r-[1px] border-zinc-600">
          <Counting
            key={arrayOfOj[currentIndex].id}
            details={arrayOfOj[currentIndex].details}
            num={arrayOfOj[currentIndex].num}
          />
        </div>

        <div className="information grid grid-cols-6">
           <div className="child col-span-2">
             <img className="" src="https://i.pinimg.com/564x/6e/62/f6/6e62f6daffabd0670528a5ae0b7d61b9.jpg" alt="" />
           </div>
           <div className="child col-span-4">
             <img className=" rounded-tr-3xl rounded-br-3xl" src="https://i.pinimg.com/564x/26/2f/cf/262fcf53a4bc32631bcd0a5d57ff95bf.jpg" alt="" />
           </div>
           <p className=" text-9xl font-safari">collection</p>
        </div>
      </div>

      <div className="navigation">
        <button onClick={prevItem} className="mr-4">
          Previous
        </button>
        <button onClick={nextItem}>Next</button>
      </div>
    </div>
  );
};

export default AboutUs;
