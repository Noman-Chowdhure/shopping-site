import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { image, rating, name, id } = item;
  return (
    <div className=" w-full">
      <div id="productCard" className=" w-2/3 mx-auto">
        <div className="img-section">
          <img
            className=" mix-blend-darken aspect-square "
            src={image}
            alt=""
          />
        </div>
        <div className="text-section">
          <h1>{name}</h1>
          <p>{rating}</p>
          <Link className=" btnn" to={`/productDetils/${id}`}>
            go to detils
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
