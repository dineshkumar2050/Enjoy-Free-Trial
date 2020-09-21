import {REGISTER} from '../actions/actionTypes';

const initialState = {
    email : null
}

export default function allReducers(state=initialState,action){
    const {type,payload} = action;
    switch (type){
        case REGISTER:
            return{
                ...state,
                email : payload
            };
        default : 
            return state;
    }
}