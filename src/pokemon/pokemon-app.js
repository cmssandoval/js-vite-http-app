import { getPokemonById } from './actions/get-pokemon-by-id.action';

/**
 * Esta función crea la aplicación en el div enviado.
 * @param {HTMLDivElement} element Elemento div HTML.
 */
export const PokemonApp = ( element ) => {

    document.title = 'Pokemon App';
    const appTitle = document.querySelector('#app-title');
    if ( appTitle ) appTitle.innerHTML = 'Pokemon App';
    
    getPokemonById( 1 );
};