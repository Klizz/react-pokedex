import React from "react";

function CardSmall(props) {
  return (
    <div className="bg-white rounded py-3 px-3 transform transition duration-400 ease-in-out hover:-translate-y-1 hover:scale-110" onClick={props.openModal}>
      <img src={props.image} alt={props.image} className="h-44 m-auto mb-6" />
      <h3 className="text-green font-extrabold text-lg">{props.number}</h3>
      <h1 className="text-blue-light font-extrabold text-xl">{props.name}</h1>
    </div>
  );
}

export default CardSmall;
