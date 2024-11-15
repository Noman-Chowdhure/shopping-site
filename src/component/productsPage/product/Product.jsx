import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import ProductCard from "../../shreadPage/ProductCard";
import Eyes from "../../shreadPage/Eyes";
import ShowPis from "../showPis/ShowPis";
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

  return (
    <div>

      <h1 id="productsHeading">our product</h1>
      <div className="sama grid grid-cols-3 gap-4 justify-center justify-items-center w-2/3 mx-auto">
        {items.map((abc) => (
          <ProductCard key={abc.id} item={abc}></ProductCard>
        ))}
      </div>

      <div className="latest  w-full h-full">
       <ShowPis></ShowPis>
      </div>


      <div className="dhon grid grid-cols-2 gap-4 justify-center justify-items-center w-2/3 mx-auto">
        {itess.map((abc) => (
          <ProductCard key={abc.id} item={abc}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Product;
