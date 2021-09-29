const axios = require('axios').default;
export const GET_ACTOR_NAME = "GET_ACTOR_NAME";

export function getActorName(file){
    var bodyFormData = new FormData();
    bodyFormData.append("file", file);
    var headers = {
        'Content-Type': 'multipart/form-data',
        'Nomada': 'MGFkMzU4OGYtMzg2MC00MDc3LWFkMTYtYWJlMmQ5YWEwZTlh' 
    }
    return function(dispatch){
        return axios.post("https://whois.nomada.cloud/upload",  bodyFormData, {"headers" : headers})
        .then((response) => {
            dispatch({type: GET_ACTOR_NAME, payload: response})
        })       
    }
}