const express = require('express')
const swaps = express.Router()
const Swap = require('../models/swaps.js')
const Plant = require('../models/plants.js')

const isAuthenticated = (req, res, next)=> {
    if (req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}

/////Swap Index Route/////
swaps.get('/', (req, res)=> {
    Swap.find({}, (error, allSwaps) => {
        if(error){
            show(error)
        } else {
            res.render('swaps/Index', {
                swaps: allSwaps,
                username: req.session.currentUser
            })
        }
    })
})

////Swap Show Route////
swaps.get('/:id', isAuthenticated, (req, res)=> {
    Swap.findById(req.params.id, (error, foundSwap)=> {
        Plant.find({}, (error, allPlants)=> {
            res.render('swaps/Show', {
                swap: foundSwap,
                plants: allPlants,
                username: req.session.currentUser
            })
        })
    })
})

/////Create Swap Route/////
swaps.post('/', isAuthenticated, (req, res) => {
    Swap.create(req.body, (error, createdSwap)=> {
        if(error){
            show(error)
        } else {
            res.redirect('/swaps')
        }
    })
})

module.exports = swaps