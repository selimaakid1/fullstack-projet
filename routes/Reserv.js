const express = require('express')
const router = express.Router()
const Reserv = require('../models/Reservation')
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator');


router.get('/', auth, (req, res) => {
    Reserv.find({
        user: req.user.id
    }).then(reserv => res.json(reserv))
        .catch(err => console.log(err.message))

})
router.post('/', [auth, [
    check('Name', 'Name is required').not().isEmpty(),
    check('Date', 'Date is required').not().isEmpty(),
    check('Number', 'Number Of person  is required').not().isEmpty(),
    check('Placement', 'Placement is required').not().isEmpty(),
    check('Hour', 'Time is required').not().isEmpty()
]], (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() })
    }
    const { Name, Date, Number, Placement, Hour } = req.body
    const newReservation = new Reserv({
        Name,
        Date,
        Number,
        Placement,
        Hour,
        user: req.user.id

    })
    newReservation.save()
        .then((reserv) => res.json(reserv))
        .catch(err => console.log(err.message))
})
router.delete('/:id', (req, res) => {
    res.send('delete reservation')
})
router.put('/:id', (req, res) => {
    res.send('edit reservation')
})
module.exports = router