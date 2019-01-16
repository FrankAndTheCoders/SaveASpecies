const router = require('express').Router()
const {Order, OrderLine} = require('../db/models')

router.post('/', async (req, res, next) => {
  try {
    const total = Number(req.body.totalAmount.totalAmount)

    const order = await Order.create({
      totalAmount: total,
      purchaseDate: new Date(),
      isPurchased: true,
      userId: +req.user.id
    })
    req.body.totalAmount.lines.forEach(async ln => {
      const {subTotal, quantity} = ln
      const line = await order.createOrderLine({
        quantity,
        subTotal,
        orderId: order.id
      })
    })
    order.save()
    res.json(order.id)
  } catch (err) {
    next(err)
  }
})

module.exports = router
