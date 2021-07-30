export default function retrieveActivityByItinerary(itinerary) {
    return fetch ('http://localhost:5000/activities/' + itinerary)
        .then(response => response.json())
}