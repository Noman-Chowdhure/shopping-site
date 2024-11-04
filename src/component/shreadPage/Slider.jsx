import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { sliderData } from "../../utils/frienFunction";

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextPro = () => {
    setCurrent((current) => (current + 1) % sliderData.length);
  };

  useEffect(() => {
    // Run the animation every time `current` changes
    gsap.from("#slid", {
      x: 500,
      duration: 1.2,
      onComplete: () => {
        gsap.to("#slid", { x: '00%', duration: 0 }); // Reset position
      }
    });
  }, [current]); // Depend on `current` so it runs on each click

  return (
    <div>
      <div id="slid">
        <SliderCard nam={sliderData[current]} index={current} />
      </div>
      <button onClick={nextPro}>Next</button>
    </div>
  );
};

const SliderCard = ({ nam, index }) => {
    const {name,long_details,rating,title,image} = nam
  const colors = ["Cornsilk", "PapayaWhip", "Lavender"];
  const color = colors[index % colors.length];

  return (
    <div className="w-full h-fit" style={{ backgroundColor: color }}>
        <div className="box p-10 grid grid-cols-2 ">
           <div className="img-section">
              <img className=" mix-blend-darken" src={image} alt="" />
           </div>
           <div className="text-sec">
             <h1 className=" text-7xl uppercase font-safari ">{name}</h1>
             <p>{title}</p>
             <p>{long_details}</p>
           </div>
        </div>
    </div>
  );
};

export default Slider;
