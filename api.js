require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const HTTPError = require('node-http-error')
const port = process.env.PORT || 4000

const { getDog } = require('./dal')

app.get('/', (req, res) => {
  res.send('Howdy!')
})

app.get('/dogs/:id', (req, res, next) => {
  getDog(req.params.id, function(err, dog) {
    if (err) {
      next(new HTTPError(err.status, err.message, err))
      return
    }
    res.send(dog)
  })
})

app.get('/breeds/:id', (req, res, next) => {
  res.send(`you asked for breed: ${req.params.id}`)
})

app.use(function(err, req, res, next) {
  res.status(err.status || 500).send(err.message)
})

app.listen(port || 4000, () =>
  console.log('dogs api up and running on port', port)
)
