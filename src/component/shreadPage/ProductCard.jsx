import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { image, rating, name, id } = item;
  return (
    <div className=" w-full aspect-square">
      <div id="productCard">
        <div className="text-section">
          <img className=" aspect-square mix-blend-darken" src={image} alt="" />
          <h1 className=" text-2xl font-safari">{name}</h1>
          <p className=" text-orange-400">{rating}</p>
          <Link className=" btnn" to={`/productDetils/${id}`}>
            go to detils
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
