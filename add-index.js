require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const db = new PouchDB(process.env.CLOUDANT_COUCHDB_URL)

const indexLoggerer = msg => err => console.log(msg, err)

db
  .createIndex({
    index: { fields: ['type'] }
  })
  .then(() => console.log('document type index created.'))
  .catch(indexLoggerer('error creating index on type'))

db
  .createIndex({
    index: { fields: ['name'] }
  })
  .then(() => console.log('dog name index created.'))
  .catch(indexLoggerer('error creating index on name'))

db
  .createIndex({ index: { fields: ['age'] } })
  .then(() => console.log('dog age index created.'))
  .catch(indexLoggerer('error creating index on age'))
