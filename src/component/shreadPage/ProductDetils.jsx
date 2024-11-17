import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const ProductDetils = () => {
  const dataInfo = useLoaderData();
  const {
    image,
    current_color,
    title,
    long_details,
    rating_star,
    name,
    price,
    category,
    available_color,
    available_size
  } = dataInfo;
  const handleCart = () => {
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataInfo),
    })
      .then((res) => res.json())
      .then((informat) => {
       if(informat.insertedId)
         {
          toast.success('product added..')
         }
        else{
          toast.error("plzz try again..")
        } 
      });

  };
  return (
    <div className=" grid grid-cols-3 font-PT capitalize w-full px-10 h-screen justify-center justify-items-center items-center gap-4 ">
      <div className=" space-y-4">
        <p>{title}</p>
        <h1 className=" text-5xl capitalize font-safari ">{name}</h1>
        <p>{long_details}</p>
      </div>
      <div className="fuck ">
        <img className=" mix-blend-darken  w-2/1 mx-auto" src={image} alt="" />
      </div>
      <div className="detils space-y-10">
        <div className="sixe space-y-5">
          <p>size</p>
          <p className=" w-full">{available_size.map((aaa) => <a className=" px-4 m-2 border-2 rounded-full">{aaa}</a>)}</p>
        </div>
        <div className="flex justify-between">
          <p>price</p>
          <p>${price}</p>
        </div>
        <div className="flex justify-between">
        <p>rating</p>
        <p className=" text-orange-500">{rating_star}</p>
        </div>
        <p>{category}</p>

        <div className=" flex gap-4 items-center">
          <h1>availableColors</h1>
          <div
            style={{ backgroundColor: available_color[0] }}
            className=" w-4 h-4 rounded-full"
          ></div>
          <div
            style={{ backgroundColor: available_color[1] }}
            className=" w-4 h-4 rounded-full"
          ></div>
          <div
            style={{ backgroundColor: available_color[2] }}
            className=" w-4 h-4 rounded-full"
          ></div>
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
          <Toaster></Toaster>
        </button>
      </div>
    </div>
  );
};

export default ProductDetils;
