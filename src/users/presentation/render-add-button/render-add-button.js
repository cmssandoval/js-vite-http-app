import { showModal } from '../render-modal/render-modal';
import './render-add-button.css';

/**
 *  
 * @param {HTMLDivElement} element
 * @param { () => void }
 */
export const RenderAddButton = ( element ) => {
    const fabButton = document.createElement('button');
    fabButton.innerHTML = '+';
    fabButton.classList.add('fab-button');
    
    element.append( fabButton );

    // TODO: Implement
    fabButton.addEventListener('click', () => {
        // if ( !callback ) return;
        // callback();
        showModal();
    });
};