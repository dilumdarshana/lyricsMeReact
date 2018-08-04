import { createSelector } from 'reselect';

const getAlbumsSelector = state => state.albums;

const selectAlbums = () => createSelector(
    getAlbumsSelector,
    (albums) => albums
);

const selectGetAlbumsError = () => createSelector(
    getAlbumsSelector,
    (error) => error
);


export {
    selectAlbums,
    selectGetAlbumsError
};
