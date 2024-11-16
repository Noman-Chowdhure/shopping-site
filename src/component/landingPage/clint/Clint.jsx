import { useState } from "react"
import { clint } from "../../../utils/frienFunction"

const Clint = () => {
  return (
    <div className=" relative">
        <div id="clintBody" className="body w-4/5 m-auto h-fit grid grid-cols-2 gap-x-20">
             <div className="clintHeading col-span-1">
                <h1 className=" text-7xl font-medium font-safari capitalize ">what our customers says..?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatibus ipsum placeat, quod modi iure perferendis fugiat mollitia cum quasi. Doloribus consectetur atque nisi sed voluptatibus nobis dicta soluta deserunt.</p>
                <button  className=" btnn">see more</button>
             </div>
             <div className="customar">
                {clint.slice(0,3).map(abc  => <CustomarCard key={abc.id} cus={abc}></CustomarCard> )}
             </div>
        </div>
        
    </div>
  )
}


export default Clint

const CustomarCard = ({cus}) =>{
    const {name,image,review,rating,email} = cus 
    const [open,setOpen] = useState(true);
   return(
     <div className=" grid grid-cols-2 w-full h-[15vh] space-y-10 border-l-2 my-4 justify-center ">
        <div className="imgSection">
          <img src={image} alt="" />
        </div>

        <div className="textSection">
          <div className="sss flex w-full justify-between">
          <h1 className=" font-safari my-4">{name}</h1>
          <button onClick={()=>setOpen(!open)} className=" rounded-full text-3xl border-[1px]">{open?'+':'-'}</button>
          </div>
          <div className={open?`hidden`:''}>
             <p className=" text-xs">{review}</p>
             <p className=" text-orange-400">{rating}</p>
             <p className=" underline">{email}</p>
          </div>
        </div>
     </div>
   )
}