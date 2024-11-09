import { useState } from "react";

import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
const SignUp = () => {
  const { createUser } = useAuth();
  const [see, setSee] = useState(false);
  const onSubmit = (data) => {
    data.preventDefault();
    const mail = data.target.email.value;
    const pass = data.target.password.value;
    console.log(mail, pass);

    createUser(mail, pass)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full h-screen grid justify-center items-center">
      <img
        className=" absolute -z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl w-2/3 h-2/3"
        src="https://i.pinimg.com/564x/44/0c/ef/440cef314f679adba15d7047c47c3661.jpg"
        alt=""
      />
      <div
        id="form-body"
        className="body rounded-3xl w-2/3 h-2/3 p-24  mx-auto grid grid-cols-2 justify-center justify-items-center items-center gap-6"
      >
        <div className="form_section w-full">
          <form
            onSubmit={onSubmit}
            className="grid w-full grid-cols-1 space-y-5"
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email here--"
              className="w-full border-b-[1px] border-zinc-300 text-orange-50 outline-none bg-transparent ps-6" // Removed h-full
            />

            <div className="passwo flex">
              <input
                type={see ? "text" : "password"}
                name="password"
                id="password"
                placeholder="password here--"
                className="w-full border-b-[1px] border-zinc-200 outline-none text-orange-50  bg-transparent ps-6" // Changed to password for better UX
              />
              <div className="btn_box">
                <button onClick={() => setSee(!see)}>
                  {see ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <input
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded"
            />
          </form>
          <Link to="/login">already hava in accout..</Link>
        </div>

        <div className="text_section ">
          <p>signUP here</p>
          <h1 className=" text-3xl text-orange-300 font-safari  my-5">
            hey! good to see you
          </h1>
          <p className=" text-sm font-mono">
            We’ve missed you! Your shopping journey starts right here, and we’re
            excited to help you find exactly what you’re looking for. Whether
            it’s something new, something you love, or something you've been
            eyeing, we’ve got it all waiting for you. Let’s make today the day
            you discover your next favorite thing!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
