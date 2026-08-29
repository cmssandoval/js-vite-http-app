import { localhostUserToModel } from '../mappers/localhost-user.mapper.js';
import { User } from '../models/user';

/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async ( page = 1 ) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${ page }`;
    const response = await fetch(url);
    const data = await response.json();

    //* Solución de Fernando
    const users = data.data.map( localhostUserToModel );

    //* Solución personal
    // const users = [];
    // data.data.forEach( userLike => {
    //     users.push(localhostUserToModel( userLike ));
    // });

    return users;
};