const express = require('express')

const router = express.Router()

const retrieveAllItineraries = require('../logic/retrieve-all-itineraries')
const retrieveItinerariesByName = require('../logic/retrieve-itinerary-by-name')

router.get('/test', (req, res) => {
    res.send({ msg: 'Here is the itineraries test route.' })

})


/*get all itineraries*/
router.get('/all',
    (req, res) => {
        retrieveAllItineraries()
            .then(itineraries => {
                res.send(itineraries)
            })
            .catch(err => console.log(err))
    })

/*get a specific itinerary after its name*/
router.get('/:city',
    (req, res) => {
        retrieveItinerariesByName(req.params.city)
            .then(itinerary => {
                res.send(itinerary)
            })
            .catch(err => console.log(err));
    });


module.exports=router