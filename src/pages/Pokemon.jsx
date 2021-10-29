import React, { useState, useEffect } from "react";

function Pokemon() {
    let url = window.location.href;
    const currentPokemon = url.split("/").pop();

    const [data, setData] = useState();
    const [pokemonData, setPokemonData] = useState();

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
          .then((response) => response.json())
          .then((data) => setData(data.results.filter((item) => item.name === currentPokemon)))
          .catch((error) => console.log("Error", error));
      }, [currentPokemon]);

      useEffect(() => {
        fetch(data.url)
          .then((response) => response.json())
          .then((res) => setPokemonData(res))
          .catch((error) => console.log("Error", error));
      }, [data]);

    return(
        <div className="py-16 text-center">
            <h1>{currentPokemon}</h1>
        </div>
    )
}

export default Pokemon;