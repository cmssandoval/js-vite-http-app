import './style.css';
import { PokemonApp } from './pokemon/pokemon-app';
import { UsersApp } from './users/users-app';


document.querySelector('#app').innerHTML = `
<main>
    <h1 id="app-title">Hola Mundo</h1>
    <section class="information-card"></section>
</main>
`;

// PokemonApp( document.querySelector('.information-card') );
UsersApp( document.querySelector('.information-card') );