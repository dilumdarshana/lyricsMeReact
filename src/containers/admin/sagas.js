import { takeEvery, put, call } from "redux-saga/effects";
import { GET_ALBUMS } from "../../action_types";
import httpRequest from './../../helpers/httpRequests';
import { getAlbumsSuccess, getAlbumsFailed } from './actions';

export function* getAllAlbums() {
    try {
        const albums = yield call(httpRequest.getAllAlbums);
        yield put(getAlbumsSuccess(albums));
    } catch(error) {
        yield put(getAlbumsFailed(error));
    }
}

export default function* adminSagas() {
    yield* [
        takeEvery(GET_ALBUMS, getAllAlbums)
    ];
}
