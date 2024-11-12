import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
const Paster = () => {
  useGSAP(() => {
    gsap.from('#post',{
      x:'-100%',
      duration:1.2,
      scrollTrigger:{
        trigger:'#post',
        start:'top center',
        end:'top -100%',
        pin:'#post',
        scrub:true
      }
    })
    
  }, []);
  return (
    <div id="poster">
        <div>
          <div>
             <h1 id="post" className=" text-[10vw] capitalize font-safari">ready to shopping..<Link className="btnn">shop now</Link> </h1>
          </div>
          <div className="brands grid grid-cols-2">
             <div className="grid">

             </div>
             <div className="grid grid-cols-4">
                <div className="box col-span-2 w-full h-[30vh] rounded-3xl bg-slate-100 grid justify-center p-10 justify-items-center items-center">
                  <p className=" text-6xl">+</p>
                  <h1 className=" font-safari uppercase text-4xl">wanna family members..</h1>
                </div>
                <div className="box">
                  <p>+</p>
                  <h1>wanna family members..</h1>
                </div>
                <div className="box">
                  <p>+</p>
                  <h1>wanna family members..</h1>
                </div>
             </div>
          </div>
        </div>
    </div>
)
}

export default Paster