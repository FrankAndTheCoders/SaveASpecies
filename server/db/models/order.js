const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  totalAmount: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  purchaseDate: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  isPurchased: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Order
