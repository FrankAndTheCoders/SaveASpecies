const Sequelize = require('sequelize')
const db = require('../db')

const Price = db.define('price', {
  currentPrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  effectiveDate: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = Price
