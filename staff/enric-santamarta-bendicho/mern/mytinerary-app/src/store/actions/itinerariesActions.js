import retrieveItinerariesByCity from '../../logic/retrieve-itinerary-by-city'
import addUserFavorites from '../../logic/add-user-favorites'

export function retrieveItineraries(city) {
   return dispatch => {
        retrieveItinerariesByCity(city)
            .then((itineraries) =>
                dispatch({
                    type: "RETRIEVE_ALL_ITINERARIES",
                    payload: itineraries
                }))
            .catch(error =>
                dispatch({
                    type: "RETRIEVE_ITINERARIES_ERROR",
                    payload: error.message
                }))
    }
}

export function addToFavorites(itineraryId) {
    return dispatch => {
        addUserFavorites(itineraryId)
            .then(() =>
                dispatch({
                    type: "ADD_TO_USER_FAVORITES"
                }))
            .catch(error => 
                dispatch({
                    type:"ADD_TO_USER_FAVORITES_ERROR",
                    payload: error.message
                }))
    }
}
