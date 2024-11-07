import { useContext } from "react";
import { AuthContext } from "../../provider/Provider";

const LogIN = () => {

   const {createUser} = useContext(AuthContext)

    const onSubmit = (data) => {
      data.preventDefault();
      const mail = data.target.email.value;
      const pass = data.target.password.value;
      console.log(mail,pass);

      createUser(mail,pass)
       .then(result => {
        console.log(result.user)
       })
       .catch(error => {
        console.log(error)
       })
    };
  
    return (
      <div className="w-full h-screen grid justify-center items-center">
        <div className="body rounded-3xl w-2/3 h-fit p-24 border-2 mx-auto grid grid-cols-2 justify-center justify-items-center items-center gap-6">
          
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
                className="w-full border-b-[1px] border-zinc-300 outline-none bg-transparent ps-6" // Removed h-full
              />
  
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password here--"
                className="w-full border-b-[1px] border-zinc-200 outline-none bg-transparent ps-6" // Changed to password for better UX
              />
              <input
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded"
              />
            </form>
          </div>
  
          <div className="text_section">
            <p>login here</p>
            <h1 className=" text-3xl text-zinc-700 font-safari  my-5">Welcome back..!</h1>
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
  
  export default LogIN;
  