const express = require('express')
const router = express.Router()
const Reserv = require('../models/Reservation')


router.get('/', (req, res) => {
    res.send('get Reservation')

})
router.post('/', (req, res) => {
    res.send('post reservation')
})
router.post('/:id', (req, res) => {
    res.send('delete reservation')
})
router.put('/:id', (req, res) => {
    res.send('edit reservation')
})
module.exports = router