const express = require('express')
const router = express.Router()
// const request = require('superagent')

const db = require('../db/usersDb')

// router.get('/', (req, res) => {
//   db.getUsers(req.app.get('db'))
//   .then(users => {
//     res.json({users: users})
//   })
//   .catch(err => {
//     res.status(500).send('Database Error: ', err.message)
//   })
// })

router.get('/', (req, res) => {
  console.log('getDR ', db.getRestrictions)
  db.getRestrictions(req.body, req.app.get('db'))
  .then(dietary_restrictions => {
    res.json({dietary_restrictions: dietary_restrictions})
  })
  .catch(err => {
    console.log('error', err)
  })
  console.log('getDR 3')
})
// waiting on auth to test this uncomment path to decode when ready
// router.get('/profile', decode, (req, res) => {
//   db.getUserByAuthId(req.user.auth_id)
//   .then(user => {
//     res.json({user: user})
//   })
//   .catch(err => {
//     res.status(500).send('Database Error: ', err.message)
//   })
// })

module.exports = router
