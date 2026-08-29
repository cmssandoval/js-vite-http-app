import usersStore from "./store/users-store";
import { RenderTable } from "./presentation/render-table/render-table";
import { RenderButtons } from "./presentation/render-buttons/render-buttons";


export const UsersApp = async ( element ) => {
    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
    element.innerHTML = '';

    // console.log(usersStore.getUsers());
    RenderTable( element );
    RenderButtons( element );
};