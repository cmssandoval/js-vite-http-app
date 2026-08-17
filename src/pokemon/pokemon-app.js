import { getPokemonById } from './actions/get-pokemon-by-id.action';

/**
 * Esta función crea la aplicación en el div enviado.
 * @param {HTMLDivElement} element Elemento div HTML.
 */
export const PokemonApp = async ( element ) => {

    let pokemonIdState = 1;

    document.title = 'Pokemon App';
    const appTitle = document.querySelector('#app-title');
    if ( appTitle ) appTitle.innerHTML = 'Pokemon App';
    
    //* Crear elementos HTML
    const loadingParagraph = document.createElement('p');
    const pokemonImage = document.createElement('img');
    const nextButton = document.createElement('button');
    const previousButton = document.createElement('button');

    //* Asignar valores a los elementos
    loadingParagraph.textContent = 'Cargando...';
    nextButton.textContent = 'Siguiente';
    previousButton.textContent = 'Anterior';

    //* Insertar elementos creados al div
    element.appendChild(loadingParagraph);
    element.appendChild(pokemonImage);
    element.appendChild(nextButton);
    element.appendChild(previousButton);

    //* Listeners de los botones
    nextButton.addEventListener('click', async () => {
        loadingParagraph.textContent = 'Cargando...';
        pokemonIdState++;
        renderPokemon( await getPokemonById( pokemonIdState ) );
    });

    previousButton.addEventListener('click', async () => {
        if ( pokemonIdState < 2 ) return;
        loadingParagraph.textContent = 'Cargando...';
        pokemonIdState--;
        renderPokemon( await getPokemonById( pokemonIdState ) );
    });
    
    //* Renderizar el pokemon
    const renderPokemon = ( pokemon ) => {
        pokemonImage.src = pokemon.image;
        loadingParagraph.textContent = `
            Pokemon #${ pokemon.id } - ${ pokemon.name }`;
    };

    //* Hacer la petición inicial
    renderPokemon( await getPokemonById( pokemonIdState ) );
};