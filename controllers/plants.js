const express = require('express')
const plantController = express.Router()
const Plant = require('../models/plants.js')

////////////////////
/// Routes
////////////////////

/////////////////Presentational Routes////////////////

////NEW ROUTE////
plantController.get('/new', (req, res)=> {
    res.render('New')
})

/////INDEX ROUTE////
plantController.get('/', (req, res)=> {
    res.render('Index')
})


////EDIT ROUTE////

////SHOW ROUTE////

/////////////////Functional Routes////////////////

////SEED ROUTE////

////CREATE ROUTE////

////UPDATE ROUTE////

////DELETE ROUTE////


module.exports = plantController