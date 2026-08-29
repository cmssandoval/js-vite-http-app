import usersStore from '../../store/users-store.js';
import { RenderTable } from '../render-table/render-table.js';
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

    nextButton.addEventListener('click', async () => {
        await usersStore.loadNextPage();
        currentPageLabel.innerText = ` ${usersStore.getCurrentPage()} `;
        RenderTable( element );
    });

    prevButton.addEventListener('click', async () => {
        await usersStore.loadPreviousPage();
        currentPageLabel.innerText = ` ${usersStore.getCurrentPage()} `;
        RenderTable( element );
    });

};
