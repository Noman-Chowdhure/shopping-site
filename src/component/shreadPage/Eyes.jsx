import { useEffect, useState } from "react";

const Eyes = () => {
  const [routate, setRoutate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRoutate(angle - 180);
    });
  });
  return (
    <div className=" w-full h-full relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-center gap-20">
        <div className="bol flex justify-center items-center w-[20vw] h-[20vw] bg-gray-100 rounded-full">
          <div className="black relative w-1/2 h-1/2 rounded-full bg-black">
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${routate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10"
            >
              <div className="black w-10 h-10 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </div>

        <div className="bol flex justify-center items-center w-[20vw] h-[20vw] bg-gray-100 rounded-full">
          <div className="black relative w-1/2 h-1/2 rounded-full bg-black">
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${routate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10"
            >
              <div className="black w-10 h-10 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
