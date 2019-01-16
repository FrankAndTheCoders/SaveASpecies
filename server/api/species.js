const router = require('express').Router()
const {Species, Price} = require('../db/models')
const db = require('../db')

router.get('/:id', async (req, res, next) => {
  try {
    const speciesId = Number(req.params.id)
    const [
      species
    ] = await db.query(`select DISTINCT ON (p."speciesId") p."currentPrice", p."id" as PriceID, s."id", s."name", s."category", s."inventory", s."description", s."ImageUrl"
from prices p left join species s ON p."speciesId" = s."id"
where p."effectiveDate" < now() and p."speciesId" = ${speciesId};`)

    res.json(species)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const [
      allSpecies
    ] = await db.query(`select DISTINCT ON (p."speciesId") p."currentPrice", p."id" as PriceID, s."id", s."name", s."category", s."inventory", s."description", s."ImageUrl"
from prices p left join species s ON p."speciesId" = s."id"
where p."effectiveDate" < now();`)
    res.json(allSpecies)
  } catch (err) {
    next(err)
  }
})

module.exports = router
