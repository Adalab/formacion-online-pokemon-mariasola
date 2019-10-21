import React from "react";
import PokeCard from "./PokeCard";
import "../stylesheets/PokeList.css";

const PokeList = props => {
  if (props.pokemons.length === 0) {
    return (
      <div className="not__found">
        <p className="not__found--text">¡Ups!No hay pokemons que coincidan</p>
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
