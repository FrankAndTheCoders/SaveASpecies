'use strict'

const db = require('../server/db')
const {User, Species, Price, Order, OrderLine} = require('../server/db/models')

const species = require('./species')

const users = require('./users')

const prices = [
  {
    currentPrice: 175000,
    effectiveDate: new Date('2019-01-02')
  },
  {
    currentPrice: 230000,
    effectiveDate: new Date('2019-01-03')
  },
  {
    currentPrice: 300000,
    effectiveDate: new Date('2019-01-04')
  },
  {
    currentPrice: 270000,
    effectiveDate: new Date('2019-01-05')
  },
  {
    currentPrice: 160000,
    effectiveDate: new Date('2019-01-01')
  },
  {
    currentPrice: 120000,
    effectiveDate: new Date('2019-01-02')
  },
  {
    currentPrice: 100000,
    effectiveDate: new Date('2019-01-02')
  },
  {
    currentPrice: 200000,
    effectiveDate: new Date('2019-01-03')
  },
  {
    currentPrice: 235000,
    effectiveDate: new Date('2019-01-04')
  },
  {
    currentPrice: 250000,
    effectiveDate: new Date('2019-01-06')
  },
  {
    currentPrice: 130000,
    effectiveDate: new Date('2019-01-06')
  },
  {
    currentPrice: 210000,
    effectiveDate: new Date('2019-01-03')
  }
]

const today = new Date()
const weekAgo = new Date().setDate(today.getDate() - 7)
const monthAgo = new Date().setDate(today.getDate() - 30)

const orders = [
  {totalAmount: 2500000},
  {purchaseDate: weekAgo, totalAmount: 3800000, isPurchased: true},
  {purchaseDate: monthAgo, totalAmount: 5750000, isPurchased: true}
]

const orderLines = [
  {quantity: 2},
  {quantity: 3},
  {quantity: 5},
  {quantity: 7},
  {quantity: 11},
  {quantity: 1},
  {quantity: 2},
  {quantity: 3},
  {quantity: 4},
  {quantity: 5},
  {quantity: 6},
  {quantity: 1},
  {quantity: 2},
  {quantity: 3},
  {quantity: 6},
  {quantity: 9},
  {quantity: 10},
  {quantity: 8}
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const dbSpecies = await Promise.all(species.map(anml => Species.create(anml)))
  const dbUsers = await Promise.all(users.map(user => User.create(user)))
  const dbPrices = await Promise.all(prices.map(price => Price.create(price)))
  const dbOrders = await Promise.all(orders.map(order => Order.create(order)))

  while (orderLines.length) {
    const line = orderLines.pop()
    dbSpecies[0].createOrderLine(line)
  }
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

  let index = 8
  let length = 4
  for (let i = 0; i < dbOrders.length; i++) {
    await dbOrders[i].setOrderLines(orderLines.slice(index, index + length))
    index -= 4
  }

  console.log(`seeded ${users.length} users`)
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
