const axios = require('axios').default;
const FormData = require('form-data');
export const GET_ACTOR_NAME = "GET_ACTOR_NAME";
export const GET_ACTOR_INFO = "GET_ACTOR_INFO";

/* export function getActorName(file){
    return function (dispatch) {
        dispatch({
          type: GET_ACTOR_NAME,
          payload: file.response.actorName,
        });
      }
}
 */
export function getActorInfo(name){
    return function(dispatch){
        return axios.get(`https://api.themoviedb.org/3/search/person?api_key=30db1237b9167f8afaf9e065b90d16b8&query=${name}`)
        .then((response) => {
            dispatch({
                type: GET_ACTOR_INFO,
                payload: response.data.results[0],
            })
        })
    }
}