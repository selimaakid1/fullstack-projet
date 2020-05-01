const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

// Connect DB
const db = 'mongodb+srv://selima123:selima123@foods-s8tcz.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true} ,(err) => {
    if (err) throw err
    console.log('Database connected!...')
})
app.use('/api/user', require('./routes/user'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/reserv', require('./routes/reserv'))



app.listen(5000, () => console.log('Server is running on port 5000...'))