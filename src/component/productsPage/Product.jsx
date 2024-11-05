import React, { useEffect, useState } from 'react'
import ProductCard from '../shreadPage/ProductCard';
import Heros from './Heros';
import AboutPro from './AboutPro';

const Product = () => {
    const [items,setItems] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/product')
          .then(res => res.json())
          .then(data =>{
            console.log(data);
            setItems(data.slice(0,10));
          })
    },[])
  return (
    <div>
      <div className="heros">
        <Heros></Heros>
      </div>
      <div className="about">
        <AboutPro></AboutPro>
      </div>
       <div className="sama grid grid-cols-5 gap-4 justify-center justify-items-center w-2/3 mx-auto">
         {
            items.map(abc =><ProductCard key={abc.id} item={abc}></ProductCard>)
         }
       </div>
    </div>
  )
}

export default Product