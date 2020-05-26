const express = require('express')
const messages = express.Router()
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

////Message New Route////
messages.get('/new', isAuthenticated, (req, res)=> {
    res.render('messages/New', {
        username: req.session.currentUser
    })
})

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
////Might use later////
// ////Message Show Route////
// messages.get('/:id', isAuthenticated, (req, res)=> {
//     Message.findById(req.params.id, (error, foundMessage)=> {
//         res.render('messages/Show', {
//         swap: foundMessage,
//         username: req.session.currentUser
//         })
//     })
// })

/////Create Message Route/////
messages.post('/', isAuthenticated, (req, res) => {
    Message.create(req.body, (error, createdMessage)=> {
        if(error){
            show(error)
        } else {
            res.redirect('/messages')
        }
    })
})
////Message Delete Route////
messages.delete('/:id', isAuthenticated, (req, res)=> {
    Message.findByIdAndDelete(req.params.id, (error, foundMessage)=> {
        res.redirect('/messages/')
    })
})

module.exports = messages