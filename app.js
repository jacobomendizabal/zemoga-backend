'use strict'

const express = require('express')
const compression = require('compression');
const bodyParser = require('body-parser')
const path = require('path')
// const hbs = require('express-handlebars')
const app = express()
const cors = require('cors')
const api = require('./routes')

app.use(cors())
app.options('*', cors())
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({limit: '50mb'}))
// app.engine('.hbs', hbs({
//   defaultLayout: 'default',
//   extname: '.hbs'
// }))
// app.set('view engine', '.hbs')
app.use('/api', api)

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());

// app.get('/login', (req, res) => {
//   res.render('login')
// })

// app.get('/', (req, res) => {
//   res.render('product')
// })
module.exports = app
