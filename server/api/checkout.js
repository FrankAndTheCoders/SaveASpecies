const router = require('express').Router()
const {Order} = require('../db/models')

router.post('/', async (req, res, next) => {
  try {
    console.log('Req Body:')
    console.log(req.body)
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
