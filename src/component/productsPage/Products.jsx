import LocomotiveScroll from "locomotive-scroll";
import AboutPro from "./aboutPro/AboutPro";
import Heros from "./heros/Heros";
import Product from "./product/Product";

const Products = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Heros></Heros>
      <AboutPro></AboutPro>
      <Product></Product>
    </div>
  );
};

export default Products;
