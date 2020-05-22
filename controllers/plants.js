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
    Plant.find({}, req.params.id, (error, allPlants) => {
        if(error){
            show(error)
        } else {
            res.render('Index', {
                plants: allPlants,
            })
        }
})
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
            itemname: "Artichokes",
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
plantController.post('/', (req, res) => {
    Plant.create(req.body, (error, createdPlant)=> {
        if(error){
            show(error)
        } else {
            res.redirect('/plants')
        }
    })
})

////UPDATE ROUTE////
plantController.put('/:id/edit', (req, res)=> {
    Plant.findByIdAndUpdate(req.params.id, req.body, (error, foundPlant)=> {
        res.redirect('/plants/')
    })
})

////DELETE ROUTE////
plantController.delete('/:id', (req, res)=> {
    Plant.findByIdAndDelete(req.params.id, (error, foundPlant)=> {
        res.redirect('/plants/')
    })
})


module.exports = plantController