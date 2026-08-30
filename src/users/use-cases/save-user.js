import { userModelToLocalHost } from '../mappers/user-to-localhost.mapper.js';
import { User } from '../models/user.js';

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async ( userLike ) => {

    const user = new User( userLike );

    if ( !user.firstName || !user.lastName ) {
        throw 'First and Last name are required';
    }

    const userToSave = userModelToLocalHost( user );

    if ( user.id ) {
        throw new Error("Not implemented");   
    }

    const updateUser = await createUser( userToSave );
    return updateUser;
};

/**
 * 
 * @param {Like<User>} user 
 */
const createUser = async ( user ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users`;
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    const newUser = await response.json();
    
    console.log(newUser);
    return newUser;
};