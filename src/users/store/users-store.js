import { loadUsersByPage } from '../use-cases/load-users-by-page.js';

const state = {
    currentPage: 0,
    users: [],
};

const loadNextPage = async () => {
    await loadUsersByPage( state.currentPage + 1 );
};

const loadPreviousPage = async () => {
    throw new Error('Not implemented');
};

const onUserChange = () => {
    throw new Error('Not implemented');
};

const reloadPage = async () => {
    throw new Error('Not implemented');
};

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChange,
    reloadPage,

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
};