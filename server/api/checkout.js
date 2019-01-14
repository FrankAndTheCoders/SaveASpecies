const router = require('express').Router()
const {Order} = require('../db/models')

router.post('/', async (req, res, next) => {
  try {
    const order = await Order.create(req.body)
    res.json(order)
  } catch (err) {
    next(err)
  }
})

module.exports = router
