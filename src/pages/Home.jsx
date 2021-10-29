import React, { useState, useEffect } from "react";
import CardSmall from "../components/smallCard";
import ModalInfo from "../components/ModalInfo";
import Modal from "react-modal";
import PulseLoader from "react-spinners/PulseLoader";

function Home() {
  // <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}/>

  const [data, setData] = useState();
  const [pokeData, setPokeData] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);


  function fetchCurrentPokemon(pokemon) {
    fetch(pokemon.url)
    .then((response) => response.json())
    .then((data) => setPokeData(data))
    .then(openModal())
    .catch((error) => console.log("Error", error));
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setPokeData(null)
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "10%",
      left: "10%",
      right: "10%",
      bottom: "10%",
    },
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <div className="py-16 text-center">
      <h1 className="mb-16 text-7xl tracking-widest font-semibold text-yellow">
        Pokedex
      </h1>
      <p className="mb-16 text-2xl font-semibold text-green">
        Click on a Pokemon to see details
      </p>
      <div className="grid grid-cols-5 gap-10 w-9/12 m-auto">
        {data
          ? data.map((pokemon, i) => {
              return (
                <CardSmall
                  openModal={()=> fetchCurrentPokemon(pokemon)}
                  index={i}
                  number={i + 1}
                  image={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
                  name={pokemon.name.toUpperCase()}
                />
              );
            })
          : <PulseLoader /> }
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {pokeData ?
          <ModalInfo
          image={`https://img.pokemondb.net/artwork/large/${pokeData.name}.jpg`}
          name={pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)}
          sprites={pokeData.sprites}
          id={pokeData.id}
          stats={pokeData.stats}
          types={pokeData.types}
          closeModal={closeModal} />
        : <PulseLoader />
        }
        </Modal>
      </div>
    </div>
  );
}

export default Home;
