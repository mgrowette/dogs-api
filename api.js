require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const HTTPError = require('node-http-error')
const port = process.env.PORT || 4000
const { head, last, split, filter, pathOr } = require('ramda')
const { getDoc, deleteDoc, createDog, jennifer } = require('./dal')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Howdy!')
})

const errNextr = next => err =>
  next(new HTTPError(err.status, err.message, err))

app.post('/dogs', (req, res, next) => {
  //console.log('req.body', req.body)

  createDog(req.body)
    .then(createResult => res.status(201).send(createResult))
    .catch(errNextr(next))
})

app.get('/dogs/:id', (req, res, next) => {
  getDoc(req.params.id)
    .then(dog => res.send(dog))
    .catch(errNextr(next))
})

app.get('/dogs', (req, res, next) => {
  var filterFn = null

  if (pathOr(null, ['query', 'q'], req)) {
    const filterProp = head(split(':', req.query.q)) // age
    const filterValue = last(split(':', req.query.q)) // 65

    filterFn = docs =>
      res.status(200).send(filter(doc => doc[filterProp] == filterValue, docs))
  } else {
    filterFn = docs => res.status(200).send(docs)
  }

  const options = {
    include_docs: true,
    start_key: 'dog_',
    end_key: 'dog_\ufff0'
  }

  jennifer(options)
    .then(filterFn)
    .catch(errNextr(next))
})

app.get('/breeds', (req, res, next) => {
  const options = {
    include_docs: true,
    start_key: 'breed_',
    end_key: 'breed_\ufff0'
  }

  jennifer(options)
    .then(docs => res.send(docs))
    .catch(err => errNextr(next))
})

app.get('/breeds/:id', (req, res, next) => {
  getDoc(req.params.id)
    .then(breed => res.send(breed))
    .catch(errNextr(next))
})

app.delete('/dogs/:id', (req, res, next) => {
  deleteDoc(req.params.id)
    .then(delResult => res.send(delResult))
    .catch(errNextr(next))
})

app.delete('/breeds/:id', (req, res, next) => {
  deleteDoc(req.params.id)
    .then(delResult => res.send(delResult))
    .catch(errNextr(next))
})

// app.get('/dogs/:id', (req, res, next) => {
//   getDog(req.params.id, function(err, dog) {
//     if (err) {
//       next(new HTTPError(err.status, err.message, err))
//       return
//     }
//     res.send(dog)
//   })
// })
//
// app.get('/breeds/:id', (req, res, next) => {
//   getBreed(req.params.id, function(err, breed) {
//     if (err) {
//       next(new HTTPError(err.status, err.message, err))
//       return
//     }
//     res.send(breed)
//   })
// })

app.use(function(err, req, res, next) {
  console.log('API err', err)
  res.status(err.status || 500).send(err.message)
})

app.listen(port || 4000, () =>
  console.log('dogs api up and running on port', port)
)
