const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator');

const jwtSecret = 'secret'
const User = require('../models/User')
const auth = require('../middleware/auth')

// Get the logged in user
// Private route
router.get('/' ,auth ,(req,res) => {
   User.findById(req.user.id)
   .then(user => res.json(user))
   .catch(err =>res.json({msg :'Server error '}))
})


router.post('/',[
    check('Email', 'Please include a valid email!').isEmail(),
    check('PassWord', 'Password is required!').not().isEmpty()
]
 ,(req,res) =>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() })

    }
    const { Email, PassWord } = req.body

    User.findOne({Email})
        .then(user => {
            if(!user){
                // Check if user exist
                return res.status(400).json({msg: 'Please register before!'})
            }else {
                // Compare password
                bcrypt.compare(PassWord, user.PassWord, (err, isMatch) =>{
                    if (err) {
                        console.log(err.message)
                    } else if(isMatch){
                        const payload = {
                            user: {
                                id: user.id
                            }
                        }

                        jwt.sign(payload, jwtSecret, {expiresIn: 3600000}, (err, token) => {
                            if (err) throw err 
                            res.json({token})
                        })
                    } else {
                        return res.status(400).json({msg: 'Wrong Password!'})
                    }
                })
                }
            
        })

        .catch(err => res.json({msg : 'Server error'}))

    })

module.exports = router