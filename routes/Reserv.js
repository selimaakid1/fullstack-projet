const express = require('express')
const router = express.Router()
const Reserv = require('../models/Reservation')
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator');


router.get('/', auth, (req, res) => {
    Reserv.find({
        user: req.user.id
    }).sort({date: -1}).then(reserv => res.json(reserv))
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
router.delete('/:id',auth, (req, res) => {
    Reserv.findById(req.params.id)
        .then(reserv => {
            if (!reserv) {
                return res.json({ msg: 'reserv not found' })
            } else if (reserv.user.toString() !== req.user.id) {
                res.json({ msg: "not authorized" })


            } else {
                Reserv.findByIdAndDelete(req.params.id, (err, data) => {
                    res.json({ msg: "Reservation has been Deleted" })
                })
            }
        })
        .catch(err => console.log(err.message))
})
router.put('/:id', auth, (req, res) => {
    const { Name, Date, Number, Placement, Hour } = req.body
    let reservFields = {}
    if (Name) reservFields.Name = Name
    if (Date) reservFields.Date = Date
    if (Number) reservFields.Number = Number
    if (Placement) reservFields.Placement = Placement
    if (Hour) reservFields.Hour = Hour
    Reserv.findById(req.params.id)
        .then(reserv => {
            if (!reserv) {
                return res.json({ msg: 'reserv not found' })
            } else if (reserv.user.toString() !== req.user.id) {
                res.json({ msg: "not authorized" })


            } else {
                Reserv.findByIdAndUpdate(req.params.id, { $set: reservFields }, (err, data) => {
                    res.json({ msg: "Reservation has been updated" })
                })
            }
        })
        .catch(err => console.log(err.message))
})
module.exports = router