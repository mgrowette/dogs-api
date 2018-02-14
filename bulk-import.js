require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const db = new PouchDB(process.env.CLOUDANT_COUCHDB_URL)

// db.bulkDocs(
//   [
//     {
//       _id: 'breed_german-shepherd',
//       name: 'German Shepherd',
//       desc:
//         "The German Shepherd Dog is one of America's most popular dog breeds —for good reason. He's an intelligent and capable working dog. His devotion and courage are unmatched. And he's amazingly versatile, excelling at most anything he's trained to do: guide and assistance work for the handicapped, police and military.",
//       country: 'Germany',
//       type: 'breed'
//     },
//     {
//       name: 'Border Collie',
//       desc:
//         'The Border Collie is a working and herding dog breed developed in the Anglo-Scottish border region for herding livestock, especially sheep. It was specifically bred for intelligence and obedience.',
//       country: 'Scotland',
//       type: 'breed',
//       _id: 'breed_border-collie'
//     },
//     {
//       name: 'Pug',
//       desc:
//         'The Pug is a breed of dog with physically distinctive features of a wrinkly, short-muzzled face, and curled tail.',
//       country: 'China',
//       type: 'breed',
//       _id: 'breed_pug'
//     },
//     {
//       name: 'Gladys',
//       age: 8,
//       gender: 'female',
//       color: 'brown',
//       breedId: 'breed_pug',
//       type: 'dog',
//       _id: 'dog_Gladys'
//     },
//     {
//       name: 'Dash',
//       age: 3,
//       gender: 'male',
//       color: 'brown',
//       breedId: 'breed_german-shepherd',
//       type: 'dog',
//       _id: 'dog_dash'
//     },
//     {
//       name: 'Tucker T',
//       age: 10,
//       gender: 'male',
//       color: 'brown',
//       breedId: 'breed_pug',
//       type: 'dog',
//       _id: 'dog_tucker-t'
//     },
//     {
//       name: 'Wormy',
//       age: 2,
//       gender: 'male',
//       color: 'black',
//       breedId: 'breed_pug',
//       type: 'dog',
//       _id: 'dog_wormy'
//     }
//   ],
//   function(err, response) {
//     if (err) {
//       return console.log(err)
//     }
//     console.log('success', response)
//
//     // handle result
//   }
// )

db
  .bulkDocs([
    {
      _id: 'breed_german-shepherd',
      name: 'German Shepherd',
      desc:
        "The German Shepherd Dog is one of America's most popular dog breeds —for good reason. He's an intelligent and capable working dog. His devotion and courage are unmatched. And he's amazingly versatile, excelling at most anything he's trained to do: guide and assistance work for the handicapped, police and military.",
      country: 'Germany',
      type: 'breed'
    },
    {
      name: 'Border Collie',
      desc:
        'The Border Collie is a working and herding dog breed developed in the Anglo-Scottish border region for herding livestock, especially sheep. It was specifically bred for intelligence and obedience.',
      country: 'Scotland',
      type: 'breed',
      _id: 'breed_border-collie'
    },
    {
      name: 'Pug',
      desc:
        'The Pug is a breed of dog with physically distinctive features of a wrinkly, short-muzzled face, and curled tail.',
      country: 'China',
      type: 'breed',
      _id: 'breed_pug'
    },
    {
      name: 'Gladys',
      age: 8,
      gender: 'female',
      color: 'brown',
      breedId: 'breed_pug',
      type: 'dog',
      _id: 'dog_gladys'
    },
    {
      name: 'Dash',
      age: 3,
      gender: 'male',
      color: 'brown',
      breedId: 'breed_german-shepherd',
      type: 'dog',
      _id: 'dog_dash'
    },
    {
      name: 'Tucker T',
      age: 10,
      gender: 'male',
      color: 'brown',
      breedId: 'breed_pug',
      type: 'dog',
      _id: 'dog_tucker-t'
    },
    {
      name: 'Wormy',
      age: 2,
      gender: 'male',
      color: 'black',
      breedId: 'breed_pug',
      type: 'dog',
      _id: 'dog_wormy'
    }
  ])
  .then(response => console.log('success', response))
  .catch(err => console.log('error', err))
