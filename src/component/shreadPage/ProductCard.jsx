import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const ProductCard = ({ item }) => {
  const { image, title, name, id } = item;
  return (
    <Link to={`/productDetils/${id}`}>
      <motion.div
        initial={{ scale: 1 }}
        whileTap={{ scale: 3, backgroundColor: "#f0f0f0" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full aspect-auto p-5 rounded-3xl shadow-lg "
      >
        <div className="box grid grid-cols-2 items-center">
          <div className="img_section">
            <img
              id="samar_card"
              className=" mix-blend-darken w-1/2 aspect-square object-contain"
              src={image}
              alt=""
            />
          </div>
          <div className="text_section">
            <p className=" font-PT text-4xl text-neutral-500 font-extralight">
              {name}
            </p>
            <p>{title}</p>
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
      </motion.div>
    </Link>
  );
};

export default ProductCard;
