const router = require('express').Router()
const {OrderLine} = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const orderLine = await OrderLine.create(req.body)
    res.json(orderLine)
  } catch (err) {
    next(err)
  }
})
