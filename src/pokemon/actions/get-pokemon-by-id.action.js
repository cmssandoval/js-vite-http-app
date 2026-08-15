

/**
 * Función para obtener un pokemon por su ID.
 * @param { Number } id ID del pokemon a obtener.
 * @returns { Object } Información del pokemon.
 */
export const getPokemonById = ( id ) => {

    const pokeapiURL = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    fetch(pokeapiURL)
        .then( response => {
            // throw new Error('El pokemon no existe');
            return response.json();
        })
        .then( data => {
            console.log({data});
        })
        .catch( error => {
            // console.error(error);
        })
    
    return {};
};