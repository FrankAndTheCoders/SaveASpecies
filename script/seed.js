'use strict'

const db = require('../server/db')
//  Db Models
const {User, Species, Price, Order, OrderLine} = require('../server/db/models')
//  Seed Data
const species = require('./species')
const users = require('./users')
const {currentPrices, pastPrices, futurPrices} = require('./prices')
const allPrices = [...currentPrices, ...pastPrices, ...futurPrices]
const orders = require('./orders')
const orderLines = require('./orderLines')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const dbSpecies = await Promise.all(species.map(anml => Species.create(anml)))
  const dbUsers = await Promise.all(users.map(user => User.create(user)))
  const dbPrices = await Promise.all(
    allPrices.map(price => Price.create(price))
  )
  const dbOrders = await Promise.all(orders.map(order => Order.create(order)))

  // while (orderLines.length) {
  //   const line = orderLines.pop()
  //   dbSpecies[0].createOrderLine(line)
  // }
  // console.log(Object.keys(Object.getPrototypeOf(dbSpecies[0])))
  // const dbOrderLines = await Promise.all(
  //   orderLines.map(line => OrderLine.create(line))
  // )

  // const orderLines = []
  // for (let i = 0; i < dbSpecies.length; i++) {
  //   await dbPrices[i].setSpecies(dbSpecies[i])
  //   const orderLine = await dbPrices[i].createOrderLine({quantity: i + 1})
  //   orderLines.push(orderLine)
  //   await dbSpecies[i].setOrderLines([orderLine])
  // }

  // let index = 8
  // let length = 4
  // for (let i = 0; i < dbOrders.length; i++) {
  //   await dbOrders[i].setOrderLines(orderLines.slice(index, index + length))
  //   index -= 4
  // }

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
