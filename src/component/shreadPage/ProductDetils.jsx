import { useLoaderData } from "react-router-dom";

const ProductDetils = () => {
  
  const dataInfo = useLoaderData();
  const {
    image,
    current_color,
    title,
    long_details,
    rating,
    name,
    price,
    category,
    available_color
  } = dataInfo;
  const handleCart = () => {
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataInfo),
    })
     .then(res => res.json())
     .then(informat => {
      console.log(informat)
     })
  };
  return (
    <div className=" grid grid-cols-1 w-full h-screen justify-center  items-center justify-items-center gap-4 ">
      <div className="fuck absolute">
        <img className=" mix-blend-darken  w-2/1 mx-auto" src={image} alt="" />
        <p className="product_ditails">{category}</p>
      </div>
      <div className=" space-y-4">
        <p>{title}</p>
        <h1 className=" text-5xl capitalize font-safari ">{name}</h1>
        <p>{long_details}</p>
        <p>${price}</p>
        <p className=" text-orange-500">{rating}</p>
        <p>{category}</p>

        <div className=" flex gap-4 items-center">
          <h1>availableColors</h1>
          <div style={{ backgroundColor:available_color[0]}} className=" w-4 h-4 rounded-full"></div>
          <div style={{ backgroundColor:available_color[1]}} className=" w-4 h-4 rounded-full"></div>
          <div style={{ backgroundColor:available_color[2]}} className=" w-4 h-4 rounded-full"></div>

        </div>
        
        <div className=" flex gap-x-4">
          <p>color:{current_color}</p>
          <div
            className=" w-6 h-6 rounded-full"
            style={{ backgroundColor: current_color }}
          ></div>
        </div>
        <button onClick={handleCart} className=" btnn capitalize">
          add to cart..
        </button>
      </div>
    </div>
  );
};

export default ProductDetils;
