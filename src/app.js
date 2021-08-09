//Utils of Node
const express =  require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

//Routes Declarations
const consultRoutes = require('./routes/consult')

//App
const app = express()

//Settings
app.set('port', process.env.PORT || 5000)

//Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json({ extended: false }))

//Routes
app.use('/api/consult', consultRoutes)

//Server
app.listen(app.get('port'), () => {
    console.log('server in funcionament in port', app.get('port'))
})