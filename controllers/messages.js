const express = require('express')
const messages = express.Router()
// const Swap = require('../models/swaps.js')
// const Plant = require('../models/plants.js')
const Message = require('../models/messages.js')
const show = console.log


////Check for authentication////
const isAuthenticated = (req, res, next)=> {
    if (req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}

/////Message Index Route/////
messages.get('/', isAuthenticated, (req, res)=> {
    Message.find({}, (error, allMessages) => {
        if(error){
            show(error)
        } else {
            res.render('messages/Index', {
                messages: allMessages,
                username: req.session.currentUser
            })
        }
    })
})

////Swap Show Route////
messages.get('/:id', isAuthenticated, (req, res)=> {
    Message.findById(req.params.id, (error, foundMessage)=> {
        res.render('messages/Show', {
        swap: foundMessage,
        username: req.session.currentUser
        })
    })
})

/////Create Swap Route/////
messages.post('/', isAuthenticated, (req, res) => {
    Message.create(req.body, (error, createdMessage)=> {
        if(error){
            show(error)
        } else {
            res.redirect('/messages')
        }
    })
})

////Update Swap Route////
messages.put('/', isAuthenticated, (req, res)=> {
    Message.findByIdAndUpdate(req.params.id, req.body, (error, allMessages)=> {
        res.redirect('/messages/')
    })
})

messages.put('/:id', isAuthenticated, (req, res)=> {
    Message.findByIdAndUpdate(req.params.id, req.body, (error, foundMessage)=> {
        res.redirect('/messages/')
    })
})

module.exports = messages