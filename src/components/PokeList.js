import React from "react";
import PokeCard from "./PokeCard";
import "../stylesheets/PokeList.css";

const PokeList = props => {
  if (props.pokemons.length === 0) {
    return (
      <div className="not_found">
        <p className="not_found_text">¡Ups!No hay pokemons que coincidan</p>
      </div>
    );
  } else {
    let pokemonsList = props.pokemons.map((pokemon, index) => {
      return (
        <PokeCard
          key={index}
          pokemonName={pokemon.name}
          pokemonImage={pokemon.picture}
          pokemonType={pokemon.type}
          pokemonId={pokemon.id}
        />
      );
    });

    return <ul className="pokemonsList">{pokemonsList}</ul>;
  }
};

export default PokeList;
