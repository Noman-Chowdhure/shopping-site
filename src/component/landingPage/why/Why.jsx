import React from "react";

const Why = () => {
  return (
    <div className=" border-t-2 rounded-tl-3xl rounded-tr-3xl p-10">
      <div className="fast_section my-44">
        <div className="text_content  grid grid-cols-2">
          <h1>about us</h1>
          <p className=" font-safari text-3xl w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            sunt tempora veniam. Magnam at assumenda, corporis qui odio ducimus
            quod doloremque sint porro repellat quae mollitia rerum ea eaque? Iu
            ducimus quod doloremque sint porro repellat quae mollitia rerum ea
            eaque? Iure
          </p>
        </div>
      </div>
      <div className="second_section grid grid-cols-3 gap-x-20">
        <div className="text_section space-y-20">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            possimus dolores perferendis quos atque facere eius repellendus,
            facilis id, non unde repellat harum nihil sunt quidem odio ipsum cum
            exercitationem sunt omnis ex adipisci. quos accusamus minus odio
            quod nesciunt minima, sunt pariatur unde commodi!
          </p>
          <p>
            Ea explicabo molestiae totam, reiciendis culpa nulla perferendis
            nihil placeat ex labore assumenda recusandae illo distinctio
            inventore. Nobis aliquid ipsa accusantium optio illum voluptates.
            Repellendus, aliquam qui. Accusantium, quibusdam repellat,{" "}
          </p>
        </div>
        <div className="content_section col-span-2">
          <h1 className=" font-PT text-[6vw] capitalize text-gray-600">
            why choice <br /> us.?
          </h1>
        </div>
      </div>
      <div className="last_section ">
        <div className="parent grid gap-x-10 grid-cols-3">
          <div className="child bg-gray-100 rounded-3xl p-10">
            <div className="num w-20 h-20 border-[1px] rounded-full grid justify-center items-center">
              <p className=" text-2xl font-semibold">01</p>
            </div>
            <div className="img">
              <img
                className=" mix-blend-darken"
                src="https://i.pinimg.com/originals/8b/d0/f2/8bd0f2e17e9a861a4c95d908158917cc.gif"
                alt=""
              />
            </div>
            <div className="text">
              <h1 className=" text-4xl  capitalize">
                hign internal <br /> quality control
              </h1>
            </div>
          </div>

          <div className="child bg-gray-100 rounded-3xl p-10">
            <div className="text">
              <h1 className=" text-4xl  capitalize">
                support 24/7 for <br /> uniterrupted operation
              </h1>
            </div>

            <div className="img">
              <img
                className=" mix-blend-darken"
                src="https://i.pinimg.com/originals/81/14/cd/8114cd9994c3d7cb8ca9da92dd5cf4f0.gif"
                alt=""
              />
            </div>
            <div className="num w-20 h-20 border-[1px] rounded-full grid justify-center items-center">
              <p className=" text-2xl font-semibold">02</p>
            </div>
          </div>

          <div className="child bg-gray-100 rounded-3xl p-10">
            <div className="num w-20 h-20 border-[1px] rounded-full grid justify-center items-center">
              <p className=" text-2xl font-semibold">03</p>
            </div>
            <div className="img">
              <img
                className=" mix-blend-darken"
                src="https://i.pinimg.com/originals/8b/d0/f2/8bd0f2e17e9a861a4c95d908158917cc.gif"
                alt=""
              />
            </div>
            <div className="text">
              <h1 className=" text-4xl  capitalize">
                experience certified in <br /> many technologies and methodologies
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
