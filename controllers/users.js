const express = require("express");
const router = express.Router();

const User = require("../models/User.js")

router.get('users/', (req, res) => {
    Note.find({}).then(myNote => res.render('index', 
    { myNote }))
})


router.get('users/:id', (req, res) => {
    Note.find({_id: req.params._id }).then(myNote => res.render({ myNote }))
})