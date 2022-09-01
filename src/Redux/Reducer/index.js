const initialState = {
    pokemons: [],
    allPokemons: [],
    types: []
  }
  
  function rootReducer(state = initialState, action) {
    switch(action.type) {
      case 'GET_POKEMONS':
        return {
          ...state,
          pokemons: action.payload,
          allPokemons: action.payload
        }
      case 'GET_TYPES':
        return {
          ...state,
          types: action.payload
        }
      case 'FILTER_BY_GENERATION':
        let generation = action.payload;
        let id1 = 0;
        let id2 = 0;

        switch (generation) {
          case "1st Generation":
            id1 = 1;
            id2 = 151;
            break;
          case "2nd Generation":
            id1 = 152
            id2 = 251
            break;
          case "3rd Generation":
            id1 = 252;
            id2 = 386;
            break;
          case "4th Generation":
            id1 = 387;
            id2 = 493;
            break;
          case "5th Generation":
            id1 = 494;
            id2 = 649;
            break;
          default:
            break;
        }
        return {
          ...state,
          pokemons: state.allPokemons.filter(pokemon => pokemon.id >= id1 && pokemon.id <= id2)
        }
      case 'FILTER_BY_TYPE':
        let typeFilter = state.allPokemons.filter(e => e.types[0].name === action.payload || e.types[1]?.name === action.payload);
        return {
          ...state,
          pokemons: typeFilter
        }
        default:
          return state;
    }
  }
  
  export default rootReducer;
  