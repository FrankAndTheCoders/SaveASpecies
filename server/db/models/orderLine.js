const Sequelize = require('sequelize')
const db = require('../db')

const OrderLine = db.define('orderLine', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  subTotal: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 0
  }
})

module.exports = OrderLine
