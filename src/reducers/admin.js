import {
    GET_ALBUMS,
    GET_ALBUMS_SUCCESS,
    GET_ALBUMS_FAILED
} from './../action_types';

const initialState = {
    albums: [],
    error: null
};

const getAlbumsReducer = (state = initialState, action) => {console.log('reducer calling..', action);
    switch(action.type) {
        case GET_ALBUMS:
            return { ...state, albums: []  };
        case GET_ALBUMS_SUCCESS:
            return { ...state, albums: action.albums  };
        case GET_ALBUMS_FAILED:
            return { ...state, albums: [], error: action.error };
        default:
            return state;
    }
    return state;
}

export default getAlbumsReducer;
