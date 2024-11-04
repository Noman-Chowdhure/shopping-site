import React, { useState } from "react";
import { sliderData } from "../../utils/frienFunction";
import { Link } from "react-router-dom";

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextPro = () => {
    setCurrent((current) => (current + 1) % sliderData.length);
  };

  return (
    <div>
      <div id="slid">
        <SliderCard nam={sliderData[current]} nextPro={nextPro} index={current} />
      </div>
      
    </div>
  );
};

const SliderCard = ({ nam, index,nextPro }) => {
  const { name, long_details, rating, title, image } = nam;
  const colors = ["Cornsilk", "PapayaWhip", "Lavender"];
  const color = colors[index % colors.length];

  return (
    <div
      className="w-full my-36 h-fit relative rounded-3xl"
      style={{ backgroundColor: color }}
    >
      <div className="box p-10 grid grid-cols-2 w-full justify-center justify-items-center items-center h-fit">
        <div className="img-section">
          <img
            className=" w-64 mix-blend-darken"
            src={image}
            alt=""
          />
        </div>

        <div className="text-sec">
          <h1 className=" my-10 text-6xl text-zinc-500 font-bold ">{name}</h1>
          <p className=" text-3xl text-gray-400">{title}</p>
          <p className=" text-sm">{long_details}</p>
          
        </div>
      </div>
      <div className="but flex justify-between">
        <div className="nextPre ">
          <button className=" btnn" onClick={nextPro}>Next</button>
        </div>
        <div className="linkPage">
          <Link className=" btnn">go to details</Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
