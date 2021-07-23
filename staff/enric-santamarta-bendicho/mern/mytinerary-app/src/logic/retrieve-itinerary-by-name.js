export default function retrieveItineraryByName(name) {
    return fetch ('http://localhost:5000/itineraries/' + name)
        .then(response => response.json())
}