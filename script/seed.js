/* eslint-disable max-statements */
'use strict'

const db = require('../server/db')
//  Db Models
const {User, Species, Price, Order, OrderLine} = require('../server/db/models')
//  Seed Data
const species = require('./species')
const users = require('./users')
const {
  currentPrices,
  pastPrices,
  futurPrices,
  monthAgoPrices,
  sixMonthsAgoPrices,
  quarterAgoPrices
} = require('./prices')
const orders = require('./orders')
const orderLines = require('./orderLines')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const dbSpecies = await Promise.all(species.map(anml => Species.create(anml)))
  const dbUsers = await Promise.all(users.map(user => User.create(user)))
  const dbCurrentPrices = await Promise.all(
    currentPrices.map(price => Price.create(price))
  )
  const dbFuturePrices = await Promise.all(
    futurPrices.map(price => Price.create(price))
  )
  const db1MonthPrices = await Promise.all(
    monthAgoPrices.map(price => Price.create(price))
  )
  const db3MonthPrices = await Promise.all(
    sixMonthsAgoPrices.map(price => Price.create(price))
  )
  const db6MonthPrices = await Promise.all(
    quarterAgoPrices.map(price => Price.create(price))
  )
  const dbOrders = await Promise.all(orders.map(order => Order.create(order)))
  console.log(Object.keys(Object.getPrototypeOf(dbOrders[0])))
  //  Set prices on species (current, future, historical)
  for (let i = 0; i < dbCurrentPrices.length; i++) {
    await dbCurrentPrices[i].setSpecies(dbSpecies[i])
    await dbFuturePrices[i].setSpecies(dbSpecies[i])
    await db1MonthPrices[i].setSpecies(dbSpecies[i])
    await db3MonthPrices[i].setSpecies(dbSpecies[i])
    await db6MonthPrices[i].setSpecies(dbSpecies[i])
  }

  //  ORDER #1
  const ord1Line1 = await dbOrders[0].createOrderLine({quantity: 3})
  const ord1Line2 = await dbOrders[0].createOrderLine({quantity: 2})

  await db1MonthPrices[0].addOrderLine(ord1Line1)
  await dbSpecies[0].addOrderLine(ord1Line1)
  await ord1Line1
    .set('subTotal', db1MonthPrices[0].currentPrice * ord1Line1.quantity)
    .save()

  await db1MonthPrices[1].addOrderLine(ord1Line2)
  await dbSpecies[1].addOrderLine(ord1Line2)
  await ord1Line2
    .set('subTotal', db1MonthPrices[1].currentPrice * ord1Line2.quantity)
    .save()

  await dbOrders[0].setUser(dbUsers[4])
  await dbOrders[0]
    .set('totalAmount', ord1Line1.subTotal + ord1Line2.subTotal)
    .save()

  //  Order #2
  const ord2Line1 = await dbOrders[1].createOrderLine({quantity: 3})
  const ord2Line2 = await dbOrders[1].createOrderLine({quantity: 2})

  await db6MonthPrices[0].addOrderLine(ord2Line1)
  await dbSpecies[0].addOrderLine(ord2Line1)
  await ord2Line1
    .set('subTotal', db6MonthPrices[0].currentPrice * ord2Line1.quantity)
    .save()

  await db6MonthPrices[1].addOrderLine(ord2Line2)
  await dbSpecies[1].addOrderLine(ord2Line2)
  await ord2Line2
    .set('subTotal', db6MonthPrices[1].currentPrice * ord2Line2.quantity)
    .save()

  await dbOrders[1].setUser(dbUsers[4])
  await dbOrders[1]
    .set('totalAmount', ord2Line1.subTotal + ord2Line2.subTotal)
    .save()

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${species.length} animals`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
