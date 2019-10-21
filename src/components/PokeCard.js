import React from "react";
const renderTypes = pokemon => {
  return pokemon.map((type, index) => (
    <li className="pokemon_types_item" key={index}>
      {type}
    </li>
  ));
};
const PokeCard = props => {
  return (
    <li>
      <img src={props.pokemonImage} alt={`${props.pokemonName}`} />
      <p>{`ID / ${props.pokemonId}`}</p>
      <div>
        <h2>{props.pokemonName}</h2>
        <ul>{renderTypes(props.pokemonType)}</ul>
      </div>
    </li>
  );
};
export default PokeCard;
