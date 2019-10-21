import React from "react";
import "../stylesheets/PokeCard.css";
const renderTypes = pokemon => {
  return pokemon.map((type, index) => (
    <li className="pokemon_types_item" key={index}>
      {type}
    </li>
  ));
};
const PokeCard = props => {
  return (
    <li className="pokemon">
      <img
        className="pokemon_img"
        src={props.pokemonImage}
        alt={`${props.pokemonName}`}
      />
      <p className="pokemon_id">{`ID / ${props.pokemonId}`}</p>
      <div className="pokemon_info">
        <h2 className="pokemon_info_name">{props.pokemonName}</h2>
        <ul className="pokemon_info_types">{renderTypes(props.pokemonType)}</ul>
      </div>
    </li>
  );
};
export default PokeCard;
