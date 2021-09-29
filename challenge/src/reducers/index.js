import { GET_ACTOR_NAME } from "../actions";

const initialState = {
    actorName: "",
}

function rootReducer (state = initialState, action){
    switch(action.type){

        case GET_ACTOR_NAME:
            return {
                actorName: action.payload,
            }
        
        default:
            return state;
    }
}

export default rootReducer;