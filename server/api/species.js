const router = require('express').Router()
const {Species} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const allSpecies = await Species.findAll()
    res.json(allSpecies)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  const speciesId = Number(req.params.id)
  try {
    const speciesType = await Species.findOne({
      where: {
        id: speciesId
      }
    })
    res.json(speciesType)
  } catch (err) {
    next(err)
  }
})

module.exports = router
