const router = require('express').Router()
const {Order, OrderLine} = require('../db/models')

router.post('/', async (req, res, next) => {
  try {
    // console.log('Req Body:')
    // console.log(req.body)
    // console.log(req.user)
    const total = Number(req.body.totalAmount.totalAmount)
    console.log(total)
    const order = await Order.create({
      totalAmount: total,
      purchaseDate: new Date(),
      isPurchased: true,
      userId: +req.user.id
    })
    // const lines = await OrderLine.bulkCreate(req.body.totalAmount.lines)
    // console.log(req.body.totalAmount.lines)
    req.body.totalAmount.lines.forEach(async ln => {
      const {subTotal, quantity} = ln
      const line = await order.createOrderLine({
        quantity,
        subTotal,
        orderId: order.id
      })
      console.log(line)
    })
    // console.log(lines)
    // order.addOrderLines(lines)
    order.save()
    res.json(order.id)
  } catch (err) {
    next(err)
  }
})

module.exports = router
