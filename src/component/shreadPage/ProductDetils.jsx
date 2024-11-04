import { useLoaderData } from "react-router-dom";

const ProductDetils = () => {
  
  const dataInfo = useLoaderData();
  const {
    image,
    color,
    title,
    rating,
    name,
    price,
    category,
    availableColors,
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
    <div className=" grid grid-cols-2 w-full h-screen justify-center  items-center justify-items-center gap-4 ">
      <div className="fuck">
        <img className=" mix-blend-darken  w-2/1 mx-auto" src={image} alt="" />
      </div>
      <div className=" space-y-4">
        <p>{title}</p>
        <h1 className=" text-5xl capitalize font-safari ">{name}</h1>
        <p>${price}</p>
        <p className=" text-orange-500">{rating}</p>
        <p>{category}</p>

        <div className=" flex gap-4 items-center">
          <h1>availableColors</h1>
          <div style={{ backgroundColor:availableColors[0]}} className=" w-4 h-4 rounded-full"></div>
          <div style={{ backgroundColor:availableColors[1]}} className=" w-4 h-4 rounded-full"></div>
          <div style={{ backgroundColor:availableColors[2]}} className=" w-4 h-4 rounded-full"></div>

        </div>
        
        <div className=" flex gap-x-4">
          <p>color:{color}</p>
          <div
            className=" w-6 h-6 rounded-full"
            style={{ backgroundColor: color }}
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
