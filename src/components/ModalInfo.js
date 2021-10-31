import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function ModalInfo(props) {
  const getTypeStyle = (type) => {
    let backgroundColor = "";
    switch (type) {
      case "grass":
        backgroundColor = "#9bcc50";
        break;
      case "poison":
        backgroundColor = "#b97fc9";
        break;
      case "fire":
        backgroundColor = "#fd7d24";
        break;
      case "flying":
        backgroundColor = "#3dc7ef";
        break;
      case "water":
        backgroundColor = "#4592c4";
        break;
      case "bug":
        backgroundColor = "#729f3f";
        break;
      case "normal":
        backgroundColor = "#a4acaf";
        break;
      case "electric":
        backgroundColor = "#eed535";
        break;
      case "ground":
        backgroundColor = "#ab9842";
        break;
      case "fairy":
        backgroundColor = "#fdb9e9";
        break;
      case "fighting":
        backgroundColor = "#d56723";
        break;
      case "psychic":
        backgroundColor = "#f366b9";
        break;
      case "rock":
        backgroundColor = "#a38c21";
        break;
      case "steel":
        backgroundColor = "#9eb7b8";
        break;
      case "ghost":
        backgroundColor = "#7b62a3";
        break;
      case "ice":
        backgroundColor = "#51c4e7";
        break;
      case "dragon":
        backgroundColor = "#f16e57";
        break;
      default:
        backgroundColor = "#000";
        break;
    }
    return { backgroundColor, color: "#FFF", margin: "5px" };
  };

  return (
    <div className="grid justify-items-stretch text-center">
      <button
        onClick={props.closeModal}
        className="bg-red text-white justify-self-end w-8 h-8 rounded-full grid text-center place-items-center"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h1 className="font-extrabold text-3xl md:text-5xl mb-10 mt-4 md:mt-0">
        <span className="text-blue-dark">{`#${props.id} `}</span>
        <span className="text-blue">{props.name}</span>
      </h1>
      <div className="lg:flex">
        <div className="lg:w-2/5 px-10 mb-10">
          <img
            src={props.image}
            alt={props.name}
            className="md:h-72 m-auto mb-6"
          />
        </div>
        <div className="lg:w-3/5">
          <div className={`grid grid-cols-${props.types.length === 1 ? '1' : '2'} gap-1 place-items-center lg:flex lg:justify-start`}>
          {props.types.map((item, i) => {
            return (
              <div
                className="rounded-full py-3 px-6 w-32 text-center"
                style={getTypeStyle(item.type.name)}
              >
                {item.type.name}
              </div>
            );
          })}
          </div>
          <div className="grid place-content-center mt-10">
            <h3 className="text-dark-blue font-bold text-2xl mb-6">
              Base Stats
            </h3>
            <div className="md:flex grid grid-cols-2 md:grid-cols-2 gap-1 m-auto">
              <div className="grid place-content-center border-2 border-grey rounded-md p-2">
                <span className="text-blue text-2xl font-bold">
                  {props.stats[0].base_stat}
                </span>
                <br />
                HP
              </div>
              <div className="grid place-content-center border-2 border-grey rounded-md p-2">
                <span className="text-blue text-2xl font-bold">
                  {props.stats[1].base_stat}
                </span>
                <br />
                Attack
              </div>
              <div className="grid place-content-center border-2 border-grey rounded-md p-2">
                <span className="text-blue text-2xl font-bold">
                  {props.stats[2].base_stat}
                </span>
                <br />
                Defense
              </div>
              <div className="grid place-content-center border-2 border-grey rounded-md p-2">
                <span className="text-blue text-2xl font-bold">
                  {props.stats[3].base_stat}
                </span>
                <br />
                Special Attack
              </div>
              <div className="grid place-content-center border-2 border-grey rounded-md p-2">
                <span className="text-blue text-2xl font-bold">
                  {props.stats[4].base_stat}
                </span>
                <br />
                Special Defense
              </div>
              <div className="grid place-content-center border-2 border-grey rounded-md p-2">
                <span className="text-blue text-2xl font-bold">
                  {props.stats[5].base_stat}
                </span>
                <br />
                Speed
              </div>
            </div>
          </div>
          <div className="grid place-content-center mt-10">
            <h3 className="text-dark-blue font-bold text-2xl mb-6">Sprites</h3>
            <div className="md:flex grid grid-cols-2 md:grid-cols-2 gap-1 m-auto">
              {props.sprites.front_default ? (
                <div className="grid place-content-center border-2 border-grey rounded-md p-2">
                  <img
                    src={props.sprites.front_default}
                    alt="Not found"
                    className="w-20 h-20"
                  />
                  <img
                    src={props.sprites.back_default}
                    alt={props.name}
                    className="w-20 h-20"
                  />
                  {props.sprites.front_female ? (
                    <span className="text-green font-bold">Male</span>
                  ) : (
                    <span className="text-green font-bold">Default</span>
                  )}
                </div>
              ) : null}
              {props.sprites.front_female ? (
                <div className="grid place-content-center border-2 border-grey rounded-md p-2">
                  <img
                    src={props.sprites.front_female}
                    alt={props.name}
                    className="w-20 h-20"
                  />
                  <img
                    src={props.sprites.back_female}
                    alt={props.name}
                    className="w-20 h-20"
                  />
                  <span className="text-green font-bold">Female</span>
                </div>
              ) : null}
              {props.sprites.front_shiny ? (
                <div className="grid place-content-center border-2 border-grey rounded-md p-2">
                  <img
                    src={props.sprites.front_shiny}
                    alt={props.name}
                    className="w-20 h-20"
                  />
                  <img
                    src={props.sprites.back_shiny}
                    alt={props.name}
                    className="w-20 h-20"
                  />
                  {props.sprites.front_shiny_female ? (
                    <span className="text-green font-bold">Shiny Male</span>
                  ) : (
                    <span className="text-green font-bold">Shiny</span>
                  )}
                </div>
              ) : null}
              {props.sprites.front_shiny_female ? (
                <div className="grid place-content-center border-2 border-grey rounded-md p-2">
                  <img
                    src={props.sprites.front_shiny_female}
                    alt={props.name}
                    className="w-20 h-20"
                  />
                  <img
                    src={props.sprites.back_shiny_female}
                    alt={props.name}
                    className="w-20 h-20"
                  />
                  <span className="text-green font-bold">Shiny Female</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalInfo;
