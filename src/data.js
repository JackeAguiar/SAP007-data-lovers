
//import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

  //Para filtrar por tipo
    filterByType: (pokemons, pokemonType) => {
      if(pokemonType === '') {
        return pokemons;
      }
      const result = pokemons.filter(pokemon => pokemon.type.includes(pokemonType))
      return result;
    };
  

