import retrieveItinerariesByCity from '../../logic/retrieve-itinerary-by-city'

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

// TODO rename retrieveItineraryByName to retrieveItinerariesByCity(name)
