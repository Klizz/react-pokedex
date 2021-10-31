import React, { useState, useEffect } from "react";
import CardSmall from "../components/smallCard";
import ModalInfo from "../components/ModalInfo";
import Modal from "react-modal";
import PulseLoader from "react-spinners/PulseLoader";

function Home() {

  const [data, setData] = useState();
  const [pokeData, setPokeData] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [generation, setGeneration] = useState('1');

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

  function changeGeneration(e) {
    setData(null);
    setGeneration(e.target.value)
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
    if(generation === "1") {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => setData(data.results.slice(1, 151)))
      .catch((error) => console.log("Error", error));
    } else if(generation === "2"){
      fetch("https://pokeapi.co/api/v2/pokemon?limit=251")
      .then((response) => response.json())
      .then((data) => setData(data.results.slice(152, 251)))
      .catch((error) => console.log("Error", error));
    } else if (generation === "3"){
      fetch("https://pokeapi.co/api/v2/pokemon?limit=386")
      .then((response) => response.json())
      .then((data) => setData(data.results.slice(252, 386)))
      .catch((error) => console.log("Error", error));
    } else if (generation === "4"){
      fetch("https://pokeapi.co/api/v2/pokemon?limit=493")
      .then((response) => response.json())
      .then((data) => setData(data.results.slice(387, 493)))
      .catch((error) => console.log("Error", error));
    } else if (generation === "5"){
      fetch("https://pokeapi.co/api/v2/pokemon?limit=649")
      .then((response) => response.json())
      .then((data) => setData(data.results.slice(494, 649)))
      .catch((error) => console.log("Error", error));
    }
  }, [generation]);


  return (
    <div className="py-16 text-center">
      <h1 className="mb-16 text-6xl md:text-7xl tracking-widest font-semibold text-yellow">
        Pokedex
      </h1>
      <div>
        <select name="generation" className="p-3 mb-8" onChange={changeGeneration}>
          <option name="1" value='1'>Generation 1</option>
          <option name="2" value='2'>Generation 2</option>
          <option name="3" value='3'>Generation 3</option>
          <option name="4" value='4'>Generation 4</option>
          <option name="5" value='5'>Generation 5</option>
        </select>
      </div>
      <p className="mb-16 text-1xl md:text-2xl font-semibold text-green">
        Click on a Pokemon to see details
      </p>
      <div className={data ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-6 w-11/12 md:w-9/12 m-auto" : "grid"}>
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
          : <PulseLoader margin={'9'} color={'white'} /> }
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
        : <div className="grid w-full place-items-center"><PulseLoader /></div>
        }
        </Modal>
      </div>
    </div>
  );
}

export default Home;
