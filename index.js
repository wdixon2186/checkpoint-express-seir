const express = require('express'); //get express(node modules)
const hbs = require('hbs');//get handlebars.
const NotesController = require('./controllers/notes.js')//get controllers.
const UsersController = require('.controllers/users.js')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')



const app = express();//create app
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());
app.use(methodOverride('_method'))
app.set("view engine", "hbs"); //allow handlebars to be accessed
app.use("/notes", NotesController );//use my controller.
app.use("/users", UsersController );



app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
