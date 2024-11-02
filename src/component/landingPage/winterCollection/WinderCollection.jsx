const WinderCollection = () => {
  return (
    <div id="windter" className=" w-full h-fit p-10 ">
      <h1 className=" text-center text-3xl uppercase font-safari ">
        our top popular product for you
      </h1>

      <div className="card w-2/2 mx-auto grid grid-cols-5 justify-center gap-x-20 justify-items-center ">
        <div className="cardChild bg-slate-100 rounded-3xl w-full p-4">
          <img
            className=" mix-blend-darken"
            src="https://i.pinimg.com/564x/04/4b/76/044b7680f1424b61465cb458dae11919.jpg"
            alt=""
          />
        </div>
        <div className="cardChild bg-slate-200 rounded-3xl w-full p-4">
          <h1>afifa</h1>
        </div>
        <div
          id="sara"
          className="cardChild bg-slate-100 rounded-3xl w-full p-4"
        >
          <img
            className=" mix-blend-darken"
            src="https://i.pinimg.com/564x/bb/6e/1f/bb6e1f3423b534e347c5cde967d5c1f3.jpg"
            alt=""
          />
        </div>
        <div className="cardChild bg-slate-200 rounded-3xl w-full p-4">
          <h1>depeka</h1>
        </div>
        <div className="cardChild bg-slate-200 rounded-3xl w-full p-4">
          <h1>depeka</h1>
        </div>
      </div>
    </div>
  );
};

export default WinderCollection;
