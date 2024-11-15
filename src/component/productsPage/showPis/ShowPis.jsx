import { motion } from "framer-motion";
const ShowPis = () => {
  return (
    <motion.div
      initial={{ backgroundColor: "" }}
      whileInView={{ backgroundColor: "black" }}
      transition={{
        duration: 3,
      }}
    >
      <div className="bdy grid grid-cols-5 gap-10 w-full h-fit">
        <div className="child col-span-3 grid grid-cols-2 justify-center justify-items-center items-center bg-slate-50 rounded-[40px]">
          <div className="text-content space-y-5 w-1/2">
            <h1 className=" font-PT uppercase text-4xl">gear</h1>
            <p className=" text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum
              ipsum ipsa laudantium, quaerat at repellendus rerum molestias,
            </p>
            <div className="btn border-b-[1px] w-fit font-PT flex gap-10">
              <button className=" font-semibold">explore more</button>
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
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            </div>
          </div>
          <div className="img-content">
            <img
              className=" w-1/2 aspect-square mix-blend-darken"
              src="https://i.pinimg.com/736x/20/29/d5/2029d51d3f51b028d6f0d4b7bab3c44d.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="child col-start-3 col-span-4 grid grid-cols-2 justify-center justify-items-center items-center bg-gray-200 rounded-[40px]">
          <div className="text-content space-y-5 w-1/2">
            <h1 className=" font-PT uppercase text-4xl">gear</h1>
            <p className=" text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum
              ipsum ipsa laudantium, quaerat at repellendus rerum molestias,
            </p>
            <div className="btn border-b-[1px] w-fit font-PT flex gap-10">
              <button className=" font-semibold">explore more</button>
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
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            </div>
          </div>
          <div className="img-content">
            <img
              className=" aspect-square mix-blend-darken"
              src="https://i.pinimg.com/736x/63/89/d8/6389d83731863b6c1a78ea1dad6c34a8.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="child col-start-2 col-span-4 grid grid-cols-2 justify-center justify-items-center items-center bg-slate-50 rounded-[40px]">
          <div className="img-content">
            <img
              className=" w-1/2 aspect-square mix-blend-darken"
              src="https://i.pinimg.com/736x/20/29/d5/2029d51d3f51b028d6f0d4b7bab3c44d.jpg"
              alt=""
            />
          </div>

          <div className="text-content space-y-5 w-1/2">
            <h1 className=" font-PT uppercase text-4xl">gear</h1>
            <p className=" text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum
              ipsum ipsa laudantium, quaerat at repellendus rerum molestias,
            </p>
            <div className="btn border-b-[1px] w-fit font-PT flex gap-10">
              <button className=" font-semibold">explore more</button>
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
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ShowPis;
