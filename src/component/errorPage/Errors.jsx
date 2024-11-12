import React from "react";

const Errors = () => {
  return (
    <div className=" grid justify-center grid-cols-2 justify-items-center items-center w-full h-screen">
        <div className="img">
        <img src="https://i.pinimg.com/originals/ab/bb/85/abbb85b65ba01edd108cc6fe8d742e27.gif" alt="" />
        </div>
      <div>
        <h1 className=" text-9xl font-safari my-8 ">opss 404</h1>
        <p className=" capitalize w-1/2">
          it looks like mon has been cleaning our website again so we cant find
          this page at the moment...
        </p>
      </div>
    </div>
  );
};

export default Errors;
