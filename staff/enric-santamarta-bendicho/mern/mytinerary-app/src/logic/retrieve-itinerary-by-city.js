export default function retrieveItineraryByCity(city) {
    return fetch ('http://localhost:5000/itineraries/' + city)
        .then(response => response.json())
}