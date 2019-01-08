const Sequilize = require('')
const db = require('../db')

const Species = db.define('species', {
  name: {
    type: Sequilize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  inventory: {
    type: Sequilize.INTEGER,
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
