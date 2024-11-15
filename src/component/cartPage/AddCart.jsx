import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const AddCart = () => {
  const userCart = useLoaderData();
  console.log(userCart);
  const { user } = useAuth();
  console.log(user);

  return (
    <div className=" w-full h-screen grid grid-cols-1 justify-center justify-items-center items-center">
      <h1>my cart ...</h1>
      <div className=" w-full">
        {userCart.map((abc) => (
          <UserData key={abc.id} sama={abc}></UserData>
        ))}
      </div>
    </div>
  );
};

const UserData = ({ sama }) => {
  const { name, image, color, price, _id } = sama;
  const handleDelet = (id) => {
    fetch(`http://localhost:5000/informa/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },

    })
      .then((res) => res.json())
      .then((dataa) => {
        console.log(dataa);
      });
  };

  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const addedPrice = (plus) => {
    setTotal(parseInt(total + plus));
    setCount((cosut) => cosut + 1);
  };
  const removePrice = (minus) =>{
    setTotal(parseInt(total - minus));
    setCount((cosut) => cosut - 1)
  };
  return (
    <div>
      <div className="saraDhon">
        <div className="products grid grid-cols-2 col-span-2">
          <div className=" w-full grid grid-cols-5 items-center justify-center gap-4">
            <img className="w-20 m-auto mix-blend-darken" src={image} alt="" />
            <h1 className=" font-safari text-sm capitalize ">{name}</h1>

            <div className="counting_bx flex justify-between w-full btnn">
              <button onClick={() => addedPrice(price)}>+</button>
              <p>{count}</p>
              <button onClick={()=> removePrice(price)}>-</button>
            </div>
            <p className=" text-lg font-mono lowercase">${total}</p>
            <button onClick={() => handleDelet(_id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
          <div className="user_data">

          </div>
        </div>
      </div>
    </div>
  );
};
export default AddCart;
