const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator');
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const jwtsecret = "secret"
router.post('/', [
    check('FirstName', 'Please enter your FirstName').not().isEmpty(),
    check('LastName', 'Please enter your LasttName').not().isEmpty(),
    check('Email', 'Please enter your Email').isEmail(),
    check('PassWord', 'Password must be 6 or more characters').not().isEmpty().isLength({ min: 6 }),
    check('Adress', 'Please enter your FirstName').not().isEmpty(),
    check('PhoneNumber', 'Please enter your PhoneNumber').not().isEmpty()
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { FirstName, LastName, Email, PassWord, Adress, PhoneNumber } = req.body
    User.findOne({ Email })
        .then(user => {
            if (user) {
                res.status(400).json({ msg: 'User already exists!!' })
            } else {
                user = new User({
                    FirstName,
                    LastName,
                    PassWord,
                    Adress,
                    Email,
                    PhoneNumber

                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(user.PassWord, salt, (err, hashedpassword) => {
                        user.PassWord = hashedpassword
                        user.save()
                        const payload = {
                            user: {
                                id: user.id
                            }
                        }
                        jwt.sign(payload, jwtsecret, { expiresIn: 3600000 }, (err, token) => {
                            if (err) throw err
                            res.send({token})
                        })
                    })

                })

            }
        })
        .catch(err=> res.status(400).json({msg : 'register failed'}))
})

module.exports = router 
