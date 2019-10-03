const express = require("express")
const router = express.Router()

const Notes = require('../models/Note.js');

router.get('notes/', (req, res) => {
    Note.find({}).then(myNote => res.render('index', 
    { myNote }))
})
router.post('notes/', (req, res) => {
   Note.create(req.body).then(newMenuItem => {

       res.json(newMenuItem);
   })
})

router.get('notes/:id', (req, res) => {
    Note.find({_id: req.params._id }).then(myNote => res.render({ myNote }))
})


router.put('notes/:id', (req, res) => {
    Note.findOneAndUpdate({ name: req.params.name}, req.body, { new: true }).then(myNote => {
        res.redirect('/')
    })
})
router.delete('notes/:id', (req, res) => {
    Note.findOneAndRemove({ name: req.params.name }).then(() => {
        res.redirect('/')
    })
})
module.exports = router