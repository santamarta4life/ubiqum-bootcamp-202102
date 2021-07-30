import retrieveActivitiesByItinerary from '../../logic/retrieve-activity-by-itinerary'

export function retrieveActivities(itinerary) {
    return dispatch => {
         retrieveActivitiesByItinerary(itinerary)
             .then((activities) =>
                 dispatch({
                     type: "RETRIEVE_ALL_ACTIVITIES",
                     payload: activities
                 }))
             .catch(error =>
                 dispatch({
                     type: "RETRIEVE_ACTIVITIES_ERROR",
                     payload: error.message
                 }))
     }
 }