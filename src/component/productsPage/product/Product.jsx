import { act, useEffect, useState } from "react";
import ProductCard from "../../shreadPage/ProductCard";

const Product = () => {
  const [items, setItems] = useState([]);
  const [itess,setItemss] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        const OverEar = data.filter(abc => abc.category == 'Over-Ear Headphones')
        const InEar = data.filter(abc=> abc.category == 'In-Ear Headphones')
        console.log(data);
        setItems(OverEar.slice(0, 10));
        setItemss(InEar.slice(0,10));
      });
  }, []);
  return (
    <div>
      <h1 id="productsHeading">our product</h1>
      <div className="sama grid grid-cols-4 gap-4 justify-center justify-items-center w-2/3 mx-auto">
        {items.map((abc) => (
          <ProductCard key={abc.id} item={abc}></ProductCard> 
        ))}
      </div>
      <div className="dhon grid grid-cols-5 gap-4 justify-center justify-items-center w-2/3 mx-auto">
         {
          itess.map((abc) => <ProductCard  
           key={abc.id}
           item={abc}
           
           ></ProductCard>)
         }
      </div>
    </div>
  );
};

export default Product;
