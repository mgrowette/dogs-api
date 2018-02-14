require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const db = new PouchDB(process.env.COUCHDB_URL)
const { propOr, compose, prop, head } = require('ramda')
//const indexLoggerer = msg => err => console.log(msg, err)

db
  .find({
    selector: { color: { $eq: 'brown' } }
  })
  .then(result => console.log(result))

// db
//   .createIndex({
//     index: { fields: ['gender'] }
//   })
//   .then(result =>
//
//   )
//   .then(result => console.log(result))

// db
//   .createIndex({
//     index: { fields: ['type'] }
//   })
//   .then(result =>
//     db.find({
//       selector: { type: { $eq: 'breed' } }
//     })
//   )
//   .then(result =>
//     console.log('db.find type query result', propOr([], 'docs', result))
//   )
//   .catch(err => console.log('error creating type index', err))

// db
//   .createIndex({
//     index: { fields: ['name'] }
//   })
//   .then(result =>
//     db.find({
//       selector: { name: { $eq: 'Dash' } }
//     })
//   )
//   .then(queryResults =>
//     console.log(
//       'query result on name',
//       compose(head, prop('docs'))(queryResults)
//     )
//   )
//   .catch(err => console.log('error creating name index', err))

// db
//   .createIndex({ index: { fields: ['age'] } })
//   .then(() => console.log('dog age index created.'))
//   .catch(err => console.log('error creating age index', err))
