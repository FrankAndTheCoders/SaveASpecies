const router = require('express').Router()
const {Order} = require('../db/models')

router.post('/', async (req, res, next) => {
  try {
    const order = await Order.create({
      totalAmount: req.body.totalAmount,
      purchaseDate: req.body.purchaseDate,
      isPurchased: true
    })
    res.json(order.id)
  } catch (err) {
    next(err)
  }
})

module.exports = router
