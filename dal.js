require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const db = new PouchDB(process.env.COUCHDB_URL)
const slugster = require('slugify')
const { pluck } = require('ramda')
// const getDog = (id, cb) => db.get(id, cb)
// const getBreed = (id, cb) => db.get(id, cb)

const getDoc = id => db.get(id)
const deleteDoc = id =>
  db
    .get(id)
    .then(doc => db.remove(doc))
    .catch(err => console.log(err))

const createDog = doc => {
  doc._id = `dog_${slugster(doc.name, { lower: true })}`
  return db.put(doc)
}

const allDocs = options =>
  db.allDocs(options).then(result => pluck('doc', result.rows))

module.exports = { getDoc, deleteDoc, createDog, allDocs }
