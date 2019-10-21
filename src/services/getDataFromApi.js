const getDataFromApi = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=25&offset=0";
  return fetch(url)
    .then(response => response.json())
    .then(pokemonItem => {
      return pokemonItem.results.map(pokemon => {
        return fetch(pokemon.url)
          .then(response => response.json())
          .then(pokemonItem => {
            const types = [];
            for (let item of pokemonItem.types) {
              types.push(item.type.name);
            }
            return {
              name: pokemonItem.name,
              id: pokemonItem.id,
              picture: pokemonItem.sprites.front_default,
              type: types
            };
          });
      });
    });
};
export default getDataFromApi;
