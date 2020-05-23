const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')
const Plant = require('../models/plants.js')


////New User////
users.get('/new', (req, res)=> {
    res.render('users/New')
})

////Show User Swaps////
// users.get('/:id/swap', (req, res)=> {
//     res.render('users/Swap') {

//     }
// })

////Create User////
users.post('/', (req, res)=> {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (err, createdUser) => {
        console.log('User created:', createdUser)
        res.redirect('/plants')
    })
})
module.exports = users