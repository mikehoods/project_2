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
            itemname: "Poppies",
            description: "Totally legal to grow. I promise.",
            img: "https://imgur.com/rJhBPlX.jpg",
            qty: 18,
            plantType: "start",
            owner: "Mike"
        },
        {
            itemname: "White Nigella",
            description: "Strange, yet beautiful.",
            img: "https://imgur.com/WqgBYco.jpg",
            qty: 14,
            plantType: "seed",
            owner: "Mike"
        },
        {
            itemname: "Calendula",
            description: "Strawberry blonde heirloom variety!",
            img: "https://i.imgur.com/qFcXYU3.jpg",
            qty: 25,
            plantType: "start",
            owner: "PlantManATX"
        },
        {
            itemname: "Echinacea",
            description: "This will not boost your immune system.",
            img: "https://imgur.com/eBJIblq.jpg",
            qty: 9,
            plantType: "seed",
            owner: "PlantManATX"
        },
        {
            itemname: "Tomatoes",
            description: "Mixed varieties of homegrown, organic goodness.",
            img: "https://i.imgur.com/O0oR9hT.jpg",
            qty: 12,
            plantType: "produce",
            owner: "PlantManATX"
        },
        {
            itemname: "Sunflowers",
            description: "Birds and bees love 'em.",
            img: "https://imgur.com/FjmlbzF.jpg",
            qty: 20,
            plantType: "cutting",
            owner: "PlantManATX"
        },
        {
            itemname: "Moss Ball",
            description: "Easier to keep alive than your goldfish.",
            img: "https://imgur.com/r3ztzEJ.jpg",
            qty: 2,
            plantType: "other",
            owner: "Mike"
        },
        {
            itemname: "Black Eyed Peas",
            description: "AKA cowpeas. Great garden snack.",
            img: "https://imgur.com/fqkUbnu.jpg",
            qty: 250,
            plantType: "seed",
            owner: "EarthMother"
        },
        {
            itemname: "Cuke Seedlings",
            description: "Baby cucumbers.",
            img: "https://imgur.com/76ZEqEn.jpg",
            qty: 8,
            plantType: "start",
            owner: "EarthMother"
        },
        {
            itemname: "Aglaonema",
            description: "AKA Chinese Evergreen. Low-light.",
            img: "https://imgur.com/1QbYkne.jpg",
            qty: 5,
            plantType: "cutting",
            owner: "EarthMother"
        },
        {
            itemname: "Rudebeckia",
            description: "Stunning perrenials.",
            img: "https://imgur.com/FejmbUz.jpg",
            qty: 0,
            plantType: "cutting",
            owner: "EarthMother"
        },
        {
            itemname: "Saffron",
            description: "Worth its weight in gold.",
            img: "https://imgur.com/m0GVLPf.jpg",
            qty: 24,
            plantType: "produce",
            owner: "Rufus"
        },
        {
            itemname: "Potatoes",
            description: "Do you even chit, bro?",
            img: "https://imgur.com/JuuZsTA.jpg",
            qty: 7,
            plantType: "other",
            owner: "Rufus"
        },
        {
            itemname: "Dutch Iris",
            description: "No maintenance, bulbs.",
            img: "https://imgur.com/gHf5pMt.jpg",
            qty: 10,
            plantType: "other",
            owner: "Rufus"
        },

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

/////MYPLANTS ROUTE////
plantController.get('/myplants', (req, res)=> {
    Plant.find({}, (error, allPlants)=> {
        if(error){
            show(error)
        } else {
            res.render('MyPlants', {
                plants: allPlants,
                username: req.session.currentUser
        })
        }
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
        res.redirect('/plants/myplants')
    })
})

////DELETE ROUTE////
plantController.delete('/:id', isAuthenticated, (req, res)=> {
    Plant.findByIdAndDelete(req.params.id, (error, foundPlant)=> {
        res.redirect('/plants/myplants')
    })
})

module.exports = plantController