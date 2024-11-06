import { useState } from "react";
import { clint } from "../../../utils/frienFunction";

const AboutPro = () => {
  const [next, setItem] = useState(0);
  const nextItems = () => {
    setItem((next) => next + (1 % clint.length));
  };

  console.log(clint[next].clientName);
  return (
    <div>
      <div className="parent grid grid-cols-3 gap-x-8 justify-center items-center">
        <div className="img-section col-span-1">
          <img
            className=" w-1/2 mx-auto rounded-full"
            src="https://i.pinimg.com/736x/62/e5/4b/62e54b54e32a50dc07bc207f4ceee9d9.jpg"
            alt=""
          />
        </div>
        <div className="text-section col-span-2 w-2/3">
          <h1 className=" font-mono">{clint[next].review}</h1>
          <button onClick={nextItems} className=" w-10 h-32 border-2 rounded-full ">
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
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPro;
