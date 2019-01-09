const User = require('./user')
const Species = require('./species')
const Price = require('./price')
const OrderLine = require('./orderLine')
const Order = require('./order')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

//  OrderLine Table
Order.hasMany(OrderLine)
Species.hasMany(OrderLine)
Price.hasMany(OrderLine)
OrderLine.belongsTo(Order)

//  Order Table
Order.belongsTo(User)

//  Price Table
Price.belongsTo(Species)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Species,
  Price,
  OrderLine,
  Order
}
