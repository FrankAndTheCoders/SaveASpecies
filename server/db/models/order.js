const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  totalAmount: {
    type: Sequelize.INTEGER
  },
  purchaseDate: {
    type: Sequelize.DATE
  },
  isPurchased: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Order
