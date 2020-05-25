/////////////////////
/// Dependencies
/////////////////////
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
require('dotenv').config()
const plantsController = require('./controllers/plants.js')
const userController = require('./controllers/users_controller.js')
const swapController = require('./controllers/swaps.js')
const messageController = require('./controllers/messages.js')
const session = require('express-session')
const User = require('./models/users.js')
const bcrypt = require('bcrypt')



const db = mongoose.connection;
const show = console.log

/////////////////////
/// Port
/////////////////////
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

/////////////////////
/// Database
/////////////////////
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project2';
// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true });
// Error / success
db.on('error', (err) => show(err.message + ' is Mongod not running?'));
db.on('connected', () => show('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => show('mongo disconnected'));
// open the connection to mongo
db.on('open' , ()=>{});


/////////////////////
/// Middleware
/////////////////////
//use public folder for static assets
app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  })
)
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

/////////////////////
/// Controllers
/////////////////////
app.use('/plants', plantsController)
app.use('/users', userController)
app.use('/swaps', swapController)
app.use('/messages', messageController)

/////////////////////
/// Route Route
/////////////////////
//localhost:3000 
app.get('/' , (req, res) => {
  res.redirect('/plants');
});

/////////////////////
/// Authorization Route
/////////////////////

app.get('/sessions/new', (req, res)=> {
  res.render('sessions/New', {currentUser: req.session.currentUser})
})
app.post('/sessions', (req, res)=> {
  User.findOne({ username: req.body.username}, (err, foundUser) => {
      if (err) {
          console.log(err)
          res.send('DB has a problem')
      } else if (!foundUser) {
          res.send('<a href="/plants">Sorry, no user found</a>')
      } else {
          if (bcrypt.compareSync(req.body.password, foundUser.password)) {
              req.session.currentUser = foundUser.username
              res.redirect('/plants')
          } else {
              res.send('<a href="/plants">Password does not match</a>')
          }
      }
  })
})
app.delete('/sessions', (req,res)=> {
  req.session.destroy(()=> {
    res.redirect('/plants')
  })
})
/////////////////////
/// Listener
/////////////////////
app.listen(PORT, () => show( 'Listening on port:', PORT));