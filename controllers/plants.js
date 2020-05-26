const express = require('express')
const plantController = express.Router()
const Plant = require('../models/plants.js')

////Check for authentication////
const isAuthenticated = (req, res, next)=> {
    if (req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}

////////////////////
/// Routes
////////////////////

////SEED ROUTE////
plantController.get('/seed', (req, res)=> {
    Plant.create([
        {
            itemname: "Artichokes",
            description: "So yummy!",
            img: "https://imgur.com/4wSfofe.jpg",
            qty: 3,
            plantType: "produce",
            owner: "Mike"
        },
        {
            itemname: "Calendula",
            description: "Strawberry blonde heirloom variety!",
            img: "https://i.imgur.com/qFcXYU3.jpg",
            qty: 25,
            plantType: "seed",
            owner: "PlantManATX"
        },
        {
            itemname: "Tomatoes",
            description: "Mix of homegrown, organic goodness.",
            img: "https://i.imgur.com/O0oR9hT.jpg",
            qty: 12,
            plantType: "produce",
            owner: "PlantManATX"
        }
    ], (error, newPlants)=>{
        res.redirect('/plants')
    })
})

/////////////////Presentational Routes////////////////

////NEW ROUTE////
plantController.get('/new', isAuthenticated, (req, res)=> {
    res.render('New', {
        username: req.session.currentUser
    })
})

/////INDEX ROUTE////
plantController.get('/', (req, res)=> {
    Plant.find({}, (error, allPlants)=> {
        if(error){
            show(error)
        } else {
            res.render('Index', {
                plants: allPlants,
                username: req.session.currentUser
        })
        }
    })
})

////EDIT ROUTE////
plantController.get('/:id/edit', isAuthenticated, (req, res)=> {
    Plant.findById(req.params.id, (error, foundPlant)=> {
        res.render('Edit', {
            plant: foundPlant
        })
    })
})

////SWAP ROUTE////
plantController.get('/:id/swap', isAuthenticated, (req, res)=> {
    Plant.findById(req.params.id, (error, foundPlant)=> {
        res.render('Swap', {
            plant: foundPlant,
            username: req.session.currentUser
        })
    })
})

////SHOW ROUTE////
plantController.get('/:id', (req, res)=> {
    Plant.findById(req.params.id, (error, foundPlant)=> {
        res.render('Show', {
            plant: foundPlant,
            username: req.session.currentUser
        })
    })
})

/////////////////Functional Routes////////////////

////CREATE ROUTE////
plantController.post('/', isAuthenticated, (req, res) => {
    Plant.create(req.body, (error, createdPlant)=> {
        if(error){
            show(error)
        } else {
            res.redirect('/plants')
        }
    })
})

////UPDATE ROUTE////
plantController.put('/:id/edit', isAuthenticated, (req, res)=> {
    Plant.findByIdAndUpdate(req.params.id, req.body, (error, foundPlant)=> {
        res.redirect('/plants/')
    })
})

////DELETE ROUTE////
plantController.delete('/:id', isAuthenticated, (req, res)=> {
    Plant.findByIdAndDelete(req.params.id, (error, foundPlant)=> {
        res.redirect('/plants/')
    })
})

module.exports = plantController