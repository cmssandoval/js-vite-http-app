import usersStore from '../../store/users-store.js';
import './render-buttons.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RenderButtons = ( element ) => {
    const nextButton = document.createElement('button');
    nextButton.innerHTML = ' Next >';

    const prevButton = document.createElement('button');
    prevButton.innerHTML = '< Next ';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page'
    currentPageLabel.innerText = ` ${usersStore.getCurrentPage()} `;

    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.append( prevButton, currentPageLabel, nextButton );

    element.append ( buttonsDivElement );
};