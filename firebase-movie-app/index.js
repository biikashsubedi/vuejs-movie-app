const admin = require('firebase-admin')

const serviceAccount = require('./vuejs-movie-app-783b3-firebase-adminsdk-9n80h-651d956580.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://vuejs-movie-app-783b3.firebaseio.com'
})

const firestore = admin.firestore()
const movies = require('./movie-list.json')

const db = firestore.collection('movies')

movies.map(async movie => {
  try {
    await db.add(movie)

  } catch (e) {
    console.log(e)
  }
})
