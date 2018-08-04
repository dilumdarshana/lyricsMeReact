import {
    GET_ALBUMS,
    GET_ALBUMS_SUCCESS,
    GET_ALBUMS_FAILED
} from './../../action_types';

const getAllAlbums = () => ({
    type: GET_ALBUMS
});

const getAlbumsSuccess = albums => ({
    type: GET_ALBUMS_SUCCESS,
    albums
});

const getAlbumsFailed = error => ({
    type: GET_ALBUMS_FAILED,
    error
});

export {
    getAllAlbums,
    getAlbumsSuccess,
    getAlbumsFailed
};
