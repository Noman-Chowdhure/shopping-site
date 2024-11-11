import { useGSAP } from "@gsap/react";
import { transform } from "framer-motion";
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
    ScrollTrigger.create({
     
    });
  }, []);
  return (
    <div id="poster">
        <div>
          <div>
             <h1 id="post" className=" text-[10vw] capitalize">ready to shopping..<Link className="btnn">shop now</Link> </h1>
          </div>
        </div>
    </div>
)
}

export default Paster