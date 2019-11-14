const router = require("express").Router()

// const users = [
//   { id: 1, name: "Mike" },
//   { id: 2, name: "Ryan" }
// ]

router.get("https://randomuser.me/api/", (req, res, next) => {
  res.json(users)
})

module.exports = router
