import usersStore from "./store/users-store";
import { RenderTable } from "./presentation/render-table/render-table";


export const UsersApp = async ( element ) => {
    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
    element.innerHTML = '';

    // console.log(usersStore.getUsers());
    RenderTable( element );
};