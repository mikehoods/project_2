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
    const thisRunsNext = (error, allPlants) => {
        if(error){
            show(error)
        } else {
            const props = {
                logs: allPlants
            }
            res.render('Index', {
                plants: allPlants,
            })
        }
    }
    Plant.find({}, thisRunsNext)
})


////EDIT ROUTE////
plantController.get('/:id/edit', (req, res)=> {
    Plant.findById(req.params.id, (error, foundPlant)=> {
        res.render('Edit', {
            plant: foundPlant
        })
    })
})

////SHOW ROUTE////
plantController.get('/:id', (req, res)=> {
    Plant.findById(req.params.id, (error, foundPlant)=> {
        res.render('Show', {
            plant: foundPlant
        })
    })
})

/////////////////Functional Routes////////////////

////SEED ROUTE////
plantController.get('/seed', (req, res)=> {
    Plant.create([
        {
            itemName: "Artichokes",
            description: "So yummy!",
            img: "https://imgur.com/4wSfofe",
            qty: 3,
            plantType: "produce"
        }
    ], (error, newPlants)=>{
        res.redirect('/plants')
    })
})

////CREATE ROUTE////

////UPDATE ROUTE////

////DELETE ROUTE////


module.exports = plantController