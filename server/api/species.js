const router = require('express').Router()
const {Species, Price} = require('../db/models')
const db = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const allSpecies = await db.query(`select DISTINCT ON (p."speciesId") p."currentPrice", s."id", s."name", s."category", s."inventory", s."description", s."ImageUrl"
from prices p left join species s ON p."speciesId" = s."id"
where p."effectiveDate" < now();`)
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
