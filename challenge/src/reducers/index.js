import { GET_ACTOR_INFO, GET_ACTOR_NAME } from "../actions";

const initialState = {
    actorName: "",
    actorInfo: null,
}

function rootReducer (state = initialState, action){
    switch(action.type){

        case GET_ACTOR_NAME:
            return {
                actorName: action.payload,
            }

        case GET_ACTOR_INFO:
            return {
                actorInfo: action.payload
            }
        
        default:
            return state;
    }
}

export default rootReducer;