import React from "react";

function CardSmall(props) {
  return (
    <div className="bg-white rounded py-3 px-3 lg:transform lg:transition lg:duration-400 lg:ease-in-out lg:hover:-translate-y-1 lg:hover:scale-110" onClick={props.openModal}>
      <div className="h-48 grid place-items-center"><img src={props.image} alt={props.image} className="m-auto max-h-40" /></div>
      <div className="h-18">
        <h3 className="text-green font-extrabold text-lg">{props.number}</h3>
      <h1 className="text-blue-light font-extrabold text-xl">{props.name}</h1>
      </div>
    </div>
  );
}

export default CardSmall;
