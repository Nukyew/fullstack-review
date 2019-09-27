require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
const authCtrl = require('./controllers/authController')
const gamesCtrl = require('./controllers/gamesController')

const app = express()

app.use(express.json())
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SESSION_SECRET
}))

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)

app.get('/api/games', gamesCtrl.getGames)

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} ducks marching on Rome.`))
})