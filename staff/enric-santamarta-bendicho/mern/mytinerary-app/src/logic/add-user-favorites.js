import axios from 'axios'

export default function (itinerary) {
    if (typeof itinerary !== 'string') throw new TypeError(`${itinerary} is not a string`)
    const body = ''

    return (async () => {
        try {
            await axios.post('http://localhost:5000/itineraries/toggle-favorite/' + itinerary, body, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`
                }
            })

        } catch (error) {
            const { status } = error

            switch (true) {
                case status === 401:
                    throw new Error('wrong credentials')
                case status < 500:
                    throw new Error('client error')
                case status >= 500:
                    throw new Error('server error')
            }
        }
    })()
}
