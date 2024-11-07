import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { image,title, name, id } = item;
  return (
    <Link to={`/productDetils/${id}`}>
    <div

     
      className="w-full aspect-auto p-5 rounded-3xl shadow-lg flex"
    >

      <div className="box">
        <img
           id="samar_card" 
          className=" mix-blend-darken aspect-square object-contain"
          src={image}
          alt=""
        />
        
        <p className=" font-safari font-extralight">{name}</p>
       
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
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </div>
    </Link>
    
  );
};



export default ProductCard;
