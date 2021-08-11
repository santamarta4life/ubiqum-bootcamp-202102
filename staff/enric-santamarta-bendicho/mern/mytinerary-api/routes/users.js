const express = require('express')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { body, validationResult } = require('express-validator');
const key = require('../keys')
const jwt = require("jsonwebtoken")

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
router.post('/', body('email').isEmail(), body('password').isLength({ min: 5 }), (req, res) => {
    const { body: { username, email, password, foto } } = req
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    bcrypt.hash(password, saltRounds, function (err, hash) {

        // Store hash in your password DB.

        createUser(username, email, hash, foto)
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send(err.message)
            })
    });

})

/*post login*/
router.post('/login', (req, res) => {
    const { body: { username,password } } = req

    login(username,password)
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send(err.message)
        })

})


module.exports = router