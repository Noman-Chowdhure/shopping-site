import React from "react";

const Contact = () => {
  return (
    <div className=" w-full h-screen px-20">
      <div className="fast_section grid grid-cols-2 outline-0">
        <div className="child w-1/3">
          <h1 className=" text-[5vw] font-PT uppercase">get in touch</h1>
        </div>
        <div className="child"></div>
      </div>
      <div className="second grid grid-cols-4 gap-x-10 ">
        <div className="child space-y-20">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            voluptatum similique? Quae pariatur hic officia maxime, consequatur
            vel quo similique ullam optio necessitatibus veniam maiores eius
            vero debitis natus cum.
          </p>
          <nav>
            <ol className=" list-decimal capitalize font-safari space-y-3">
              <li>barisal rupatoli</li>
              <li>01307188915</li>
              <li>jyaffa1233@gmail.com</li>
              <li>noman4.0</li>
            </ol>
          </nav>
        </div>
        <div className="child col-start-3  col-span-4">
          <form
            action="https://formspree.io/f/xbljkjod"
            method="POST"
            className=" grid grid-cols-1"
          >
            <label htmlFor="text" className="text-6xl">
              [your name]
            </label>
            <input
              className=" w-full border-b-2 outline-0 ps-7 my-6 font-PT"
              type="text"
              name="name"
              placeholder=" your name"
            />
            <label htmlFor="email" className=" text-6xl">
              [your email]
            </label>
            <input
              className=" w-full border-b-2 outline-0 ps-7 my-6 font-PT"
              type="email"
              name="email"
              placeholder=" your email"
            />
            <button type=" submit" className=" btnn w-fit">
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
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
