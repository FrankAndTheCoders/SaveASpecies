const Sequilize = require('sequelize')
const db = require('../db')

const Species = db.define('species', {
  name: {
    type: Sequilize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  category: {
    type: Sequilize.ENUM('Birds', 'Fish', 'Mammals')
  },
  inventory: {
    type: Sequilize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  description: {
    type: Sequilize.TEXT
  },
  ImageUrl: {
    type: Sequilize.STRING
  }
})

module.exports = Species
