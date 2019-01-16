const router = require('express').Router()
const {OrderLine, Order, Species} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  try {
    const cart = Order.findOne({
      where: {
        isPurchased: false,
        userId: req.user.Id
      },
      include: [
        {
          model: OrderLine
        }
      ]
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

router.post('/orderline', async (req, res, next) => {
  try {
    const orderLine = await OrderLine.create(req.body)
    res.json(orderLine)
  } catch (err) {
    next(err)
  }
})

router.get('/order/:userId', async (req, res, next) => {
  if (req.user && req.params.userId === '' + req.user.id) {
    try {
      const {userId} = req.params

      const orders = await Order.findAll({
        where: {userId},
        include: [
          {
            model: OrderLine,
            attributes: ['id', 'quantity', 'subTotal', 'speciesId', 'orderId'],
            include: [{model: Species, attributes: ['name']}]
          }
        ]
      })
      res.json(orders)
    } catch (err) {
      next(err)
    }
  }
})

router.post('/order', async (req, res, next) => {
  try {
    const [numberOfAffectedRows, affectedRows] = await Order.update(
      {
        isPurchased: true,
        totalAmount: req.body.totalAmount
      },
      {
        where: {
          userId: req.body.userId,
          isPurchased: false
        }
      }
    )
    res.send(affectedRows)
  } catch (err) {
    next(err)
  }
})
