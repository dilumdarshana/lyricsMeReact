import { SET_NAME, SET_AGE } from './../action_types';

const initialState = {
    name: '',
    age: null
}

const userReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_NAME:
            state = {
                ...state,
                name: action.name
            };
            break;
        case SET_AGE:
            state = {
                ...state,
                age: action.age
            };
            break;
    };
    return state;
};

export default userReducer;