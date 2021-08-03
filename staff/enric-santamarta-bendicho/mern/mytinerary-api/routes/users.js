const express = require('express')

const router = express.Router()

const retrieveAllUsers = require('../logic/retrieve-all-users')
const createUser = require('../logic/create-user')


router.get('/test', (req, res) => {
    res.send({ msg: 'Here is the users test route.' })

})


/*get all users*/
router.get('/all',
    (req, res) => {
        retrieveAllUsers()
            .then(users => {
                res.send(users)
            })
            .catch(err => console.log(err))
    })


/*post users*/
router.post('/', (req, res) => {
    const { body: { username, email, password, foto } } = req

    createUser(username, email, password, foto)
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send("Server Error")
        })

})

module.exports = router