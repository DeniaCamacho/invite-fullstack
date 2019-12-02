const router = require("express").Router()
const axios = require("axios")
const going = []
const notgoing = []

router.get("/users", (req, res, next) => {
  axios.get("https://randomuser.me/api/").then(resp => {
    const person = resp.data.results[0]

    res.json({
      fname: person.name.first,
      lname: person.name.last,
      phone: person.cell,
      picture: person.picture.large,
      email: person.email
    })
  })
})
router.post("/going", (req, res, next) => {
  const length = going.length
  const id = length + 1
  const person = { ...req.body.person, id }
  console.log(req.body.person)
  going.push(person)
  res.json(person)
})

router.get("/going", (req, res, next) => {
  res.json(going)
})

router.post("/notGoing", (req, res, next) => {
  const length = notgoing.length
  const id = length + 1
  const person = { ...req.body.person, id }
  console.log(req.body.person)
  notgoing.push(person)
  res.json(person)
})
router.get("/notGoing", (req, res, next) => {
  res.json(notgoing)
})

// router.get("https://randomuser.me/api/", (req, res, next) => {
//   res.json(users)
// })

module.exports = router
