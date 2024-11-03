import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState } from "react";
import Counting from "../../shreadPage/Counting";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const arryOfOj = [
    { id: 32, details: 'my name is noman', num: 1 },
    { id: 342, details: ' now im codding', num: 2 },
    { id: 324534, details: 'lorem klsdl;hello moterh fucker', num: 3 },
    { id: 3236345, details: 'lorem klsdl;kfjlksjdflkjslkdfjlksoiweuroiusdfjlksajdflkjslkdfjlksjdflkj', num: 4 },
  ];

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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % arryOfOj.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + arryOfOj.length) % arryOfOj.length);
  };

  return (
    <div id="aboutUs" className="w-5/6 mx-auto bg-zinc-800 px-28 py-10">
      <div className="top-heading border-b-[1px] border-zinc-600">
        <h1 className="text-9xl capitalize font-safari text-zinc-300">explore</h1>
      </div>

      <div className="detils grid grid-cols-2">
        <div className="counting border-r-[1px] border-zinc-600">
          <Counting key={arryOfOj[currentIndex].id} details={arryOfOj[currentIndex].details} />
        </div>
        <div className="information">
          {/* Display additional information here if needed */}
        </div>
      </div>
      <div className="navigation">
        <button onClick={prevItem} className="mr-4">Previous</button>
        <button onClick={nextItem}>Next</button>
      </div>
    </div>
  );
};

export default AboutUs;
