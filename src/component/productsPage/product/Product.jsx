import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import ProductCard from "../../shreadPage/ProductCard";
import Eyes from "../../shreadPage/Eyes";
gsap.registerPlugin(ScrollTrigger);

const Product = () => {
  const [items, setItems] = useState([]);
  const [itess, setItemss] = useState([]);
  const [nextIma, setNextImg] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        const OverEar = data.filter(
          (abc) => abc.category == "Over-Ear Headphones"
        );
        const InEar = data.filter((abc) => abc.category == "In-Ear Headphones");
        console.log(data);
        setItems(OverEar.slice(0, 10));
        setItemss(InEar.slice(0, 10));
      });
  }, []);

  useEffect(() => {
    gsap.to("#about", {
      scale: 0.9,
      borderRadius:'50px',
      duration: 1.2,
      delay: 1,
      scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 0%",
        scrub: true,
      },
    });


    // gsap.from("#ol li", {
    //   x: -300,
    //   opacity: 0,
    //   duration: 1.3,
    //   stagger: 1.2,
    //   scrollTrigger: {
    //     trigger: "#ol li",
    //     scroller: "body",
    //     start: "top 30%",
    //     end: "top -100%",
    //     markers:true
    //   },
    // });
  }, []);
  return (
    <div>
      <h1 id="productsHeading">our product</h1>
      <div className="sama grid grid-cols-5 gap-4 justify-center justify-items-center w-2/3 mx-auto">
        {items.map((abc) => (
          <ProductCard key={abc.id} item={abc}></ProductCard>
        ))}
      </div>

      <div className="latest w-full h-full">
        <div className=" p-4 bg-zinc-100" id="about">
          <h1
            id="topNav"
            className=" my-8 xl:text-6xl md:text-4xl capitalize font-safari text-zinc-600 font-extrabold"
          >
            we make sure your product & creation deliverd porperly...
          </h1>

          <div
            id="content"
            className=" w-full h-fit grid grid-cols-2 md:gird-cols-1 gap-10 justify-center justify-items-center"
          >
            <div className="eyes max-sm:hidden">
         
              <img src="https://i.pinimg.com/originals/c4/9a/20/c49a207e0f89c9290d98fd43a87a8cb0.gif" alt="" />
            </div>
            <div className="text-content max-sm:col-span-2 space-y-4">
              <h1 className=" text-2xl capitalize font-safari my-10">
                why we are best platform for online..?
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet aliquam vel possimus magni ipsa fugiat quam repudiandae
                expedita harum, consectetur itaque eum ex repellat, sit ullam
                blanditiis quae nobis eaque!
              </p>
              <nav className=" max-sm:grid justify-center justify-items-center">
                <ol id="ol" className=" space-y-2">
                  <li className=" border-[1px] rounded-full w-fit px-4 border-zinc-400">
                    we have latest colution ..
                  </li>
                  <li className=" border-[1px] rounded-full w-fit px-4 border-zinc-400">
                    we have latest colution ..
                  </li>
                  <li className=" border-[1px] rounded-full w-fit px-4 border-zinc-400">
                    we have latest colution ..
                  </li>
                  <li className=" border-[1px] rounded-full w-fit px-4 border-zinc-400">
                    we have latest colution ..
                  </li>
                  <li className=" border-[1px] rounded-full w-fit px-4 border-zinc-400">
                    we have latest colution ..
                  </li>
                </ol>
              </nav>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, libero! Nisi quidem commodi veniam labore sit tenetur
                dignissimos nihil ea, velit, vero cumque, ullam quas nobis
                praesentium at. Modi, fuga.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dhon grid grid-cols-5 gap-4 justify-center justify-items-center w-2/3 mx-auto">
        {itess.map((abc) => (
          <ProductCard key={abc.id} item={abc}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Product;
