const router = require('express').Router()
const {Species} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const species = await Species.findAll()
    res.json(species)
  } catch (err) {
    next(err)
  }
})

module.exports = router
