import React from 'react'

const Heros = () => {
  return (
    <div className=' w-full h-fit'>
        <div className="mainn   w-11/12 mx-auto my-24 p-20 rounded-tl-3xl rounded-tr-3xl grid grid-cols-3">
            <div className="text-content col-span-2 grid grid-cols-2 justify-center items-center">
                <div className="img">
                    <img className=' mix-blend-darken w-2/3' src="https://i.pinimg.com/736x/bb/a2/80/bba28098e209c1ce822b98988b913ae9.jpg" alt="" />
                </div>
                <div className="text">
                    <h1 className=' text-8xl uppercase font-extrabold font-safari text-gray-400'>air pods max</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nisi eum? Est ipsam saepe, sit quos eum nisi perferendis quo excepturi quas, eius enim. Quas repellendus voluptatum possimus assumenda aperiam!</p>
                    <button>know more..</button>
                </div>
            </div>
            <div className="headphone_back">
                <img className=' mix-blend-darken absolute' src="https://i.pinimg.com/736x/0e/f4/23/0ef423fc8f17be1a5f1df86973163f7c.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Heros