import axios from 'axios';

export function getPokemons(limit = 151, offset = 0) {
  return async function(dispatch) {
    const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    const promises = poke.data.results.map((it) => axios.get(it.url))
    const pokemons = await Promise.all(promises).then(values => {
        return values.map((pk) => (
            {
                id: pk.data.id,
                name: pk.data.name,
                hp: pk.data.stats[0].base_stat,
                attack: pk.data.stats[1].base_stat,
                defense: pk.data.stats[2].base_stat,
                speed: pk.data.stats[5].base_stat,
                image: pk.data.sprites.other["official-artwork"].front_default,
                imageFrontDefault: pk.data.sprites.front_default,
                imageBackDefault: pk.data.sprites.back_default,
                gifFrontDefault: pk.data.sprites.versions["generation-v"]["black-white"].animated.front_default,
                types: pk.data.types.map((t) => {
                    return {
                        id: t.type.url.split('/')[6],
                        name: t.type.name
                    }
                })
            }
          ))
      })
      console.log(pokemons)
    return dispatch({
      type: 'GET_POKEMONS',
      payload: pokemons
    });
  }
}

export function getTypes() {
  return async function(dispatch) {
    try {
      let types = await axios.get("https://pokeapi.co/api/v2/type");
      let typesNames = types.data.results.map(type => type.name).filter(type => type !== "shadow" && type !== "unknown");
      console.log(typesNames);
      return dispatch({
        type: 'GET_TYPES',
        payload: typesNames
      });
    } catch (e) {
      console.log(e);
    }
  }
}

export function filterByGeneration(payload = "1st Generation") {
  return {
    type: 'FILTER_BY_GENERATION',
    payload
  }
}

export function filterByType(payload) {
  return {
    type: 'FILTER_BY_TYPE',
    payload
  }
}
