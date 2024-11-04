import React from 'react'

const Counting = ({details,num}) => {
    console.log(details)
  return (
    <div>
       <h1 className=' text-4xl uppercase font-safari  text-zinc-600 '>{details}</h1>
       <p className=' text-9xl font-safari text-zinc-500 '>{num}</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium tempore deserunt eos itaque fuga, dolores cupiditate sequi possimus numquam, unde necessitatibus provident quod, quisquam nobis eveniet esse? Necessitatibus, natus!</p>
    </div>
  )
}

export default Counting