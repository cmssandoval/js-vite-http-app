

/**
 * Función para obtener un pokemon por su ID.
 * @param { Number } id ID del pokemon a obtener.
 * @returns { Promise<Object> } Información del pokemon.
 */
export const getPokemonById = async ( id ) => {


    const pokeapiURL = `https://pokeapi.co/api/v2/pokemon/`;
    const response = await fetch( pokeapiURL + id );
    const data = await response.json();
    // console.log({ data });

    const pokemonData = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
    };
    
    console.log({ pokemonData });
    return pokemonData;

    //* Otra forma con un manejo de excepciones básico
    // try {   
    //     const pokeapiURL = `https://pokeapi.co/api/v2/pokemon/`;
    //     const response = await fetch( pokeapiURL + id );
    //     const data = await response.json();
    //     console.log({ data });
    // } catch (error) {
    //     throw `No se pudo encontrar el pokemon con el id ${id}`
    // }

    //* Forma anticuada según Fernando.
    // const pokeapiURL = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    // fetch(pokeapiURL)
    //     .then( response => {
    //         // throw new Error('El pokemon no existe');
    //         return response.json();
    //     })
    //     .then( data => {
    //         console.log({data});
    //     })
    //     .catch( error => {
    //         // console.error(error);
    //     })
    
    return {};
};