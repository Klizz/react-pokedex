import React, { useState, useEffect } from "react";
import CardSmall from "../components/smallCard";

function Home() {
  // <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}/>

  const [data, setData] = useState();

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
      <p className="mb-16 text-2xl font-semibold text-green">Click on a Pokemon to see details</p>
      <div className="grid grid-cols-5 gap-10 w-9/12 m-auto">
      {
        data ? 
        data.map((pokemon, i) => {
            return(
                <CardSmall
                index={i}
                number={i + 1}
                url={`/pokemon/${pokemon.name}`}
                image={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
                name={pokemon.name.toUpperCase()}
                 />
            )
        })
        : ""
      }
      </div>
    </div>
  );
}

export default Home;
