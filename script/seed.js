'use strict'

const db = require('../server/db')
const {User, Species, Price, Order, OrderLine} = require('../server/db/models')

const species = [
  {
    name: 'Slow Loris',
    category: 'Mammals',
    inventory: 11,
    description:
      'Slow lorises are nocturnal and arboreal, or tree-dwelling, primates. They move with slow, deliberate hand-over-hand movements through the trees but can move quickly if necessary. A keen sense of smell helps them locate prey in the dark, and their strong grasp allows them to stay in one position for hours.',
    ImageUrl: 'SlowLoris.jpg'
  },
  {
    name: 'Sloth Bear',
    category: 'Mammals',
    inventory: 15,
    description:
      'Sloth bears live in a variety of habitats on the Indian subcontinent. They have long, shaggy hair and primarily feed on termites and ants. Females usually give birth to one or two young, and carry their cubs on their backs for several months to protect them from predators. Cubs stay with their mothers for up to two and a half years. The biggest threats to sloth bears are habitat loss and poaching.',
    ImageUrl: 'SlothBear.jpg'
  },
  {
    name: 'Panda',
    category: 'Mammals',
    inventory: 18,
    description:
      'Giant pandas are found only in the temperate forests of China. Although classified as a carnivore, the panda’s diet consists almost exclusively of bamboo. Despite being one of the most popular animals in the world, giant pandas are threatened by habitat fragmentation and unsustainable development. It is estimated that 1,800 pandas remain in the wild. WWF is the primary international conservation organization protecting pandas and their habitat.',
    ImageUrl: 'Panda.jpg'
  },
  {
    name: 'Manatee',
    category: 'Mammals',
    inventory: 20,
    description:
      'West Indian manatees inhabit rivers, canals, estuaries and bays from Florida through the Caribbean, along the eastern coast of Central America and the northern coast of South America. Feeding on sea grasses, freshwater plants, and floating vegetation, manatees eat for six to eight hours a day, consuming 11 percent of their body weight. While these creatures are surprisingly agile, collisions with boats, as well as pollution, pose serious risks to manatees.',
    ImageUrl: 'Manatee.jpg'
  },
  {
    name: 'Eagle',
    category: 'Birds',
    inventory: 28,
    description:
      'Bald eagles live along the rivers, lakes, marshes, and seacoasts of North America. While fish make up the majority of its diet, the bald eagle will also prey upon other birds and small mammals, such as rabbits. A conservation success story, after being protected under the Endangered Species Act, bald eagle populations in the lower 48 states have been down listed to “threatened.” These majestic birds are still at risk due to habitat loss, toxins, and pollution.',
    ImageUrl: 'Eagle.jpg'
  },
  {
    name: 'Emerald Hummingbird',
    category: 'Birds',
    inventory: 12,
    description:
      'This species, the only hummingbird endemic to Hondurus, is Central America’s most endangered bird. Habitat loss is the main threat to its survival, and its already-limited and fragmented range is declining.',
    ImageUrl: 'EmeraldHummingbird.jpg'
  },
  {
    name: 'Woodpecker',
    category: 'Birds',
    inventory: 24,
    description:
      'Inhabiting mature forests and their borders, pileated woodpeckers are very shy and hard to observe. After excavating holes in fallen timber, dead roots and stumps, the woodpecker uses its very long, sticky tongue to reach carpenter ant burrows. The bird’s call sounds like a wild laugh, and its drumming for food sounds like heavy hammering. The pileated woodpecker is at risk from habitat loss.',
    ImageUrl: 'Woodpecker.jpg'
  },
  {
    name: 'Rockhopper Penguin',
    category: 'Birds',
    inventory: 27,
    description:
      'Rockhoppers are found among the coastal grasses and rocky shores throughout Southern Ocean islands. They’re the most aggressive species of penguin, and feed on krill, crustaceans and squid. While the males incubate eggs in their brood pouch for four months, they depend on females to feed them. If the female does not return to feed the male, he will regurgitate “penguin’s milk” from his digestive system to feed the offspring. Oil spills, commercial fishing and a reduction of their prey species threaten these pioneering penguins.',
    ImageUrl: 'RockhopperPenguin.jpg'
  },
  {
    name: 'Leopard Shark',
    category: 'Fish',
    inventory: 19,
    description:
      'The leopard shark is one of the most common shoreline sharks along the Pacific coast of North America, ranging from Washington to Mexico. Leopard sharks usually live in shallow waters with mouths on the underside of their heads, suited for bottom feeding. Unlike other fish, female leopard sharks keep eggs safe inside their bodies until releasing the baby sharks, called pups.',
    ImageUrl: 'LeopardShark.jpg'
  },
  {
    name: 'Great White Shark',
    category: 'Fish',
    inventory: 15,
    description:
      'Great white sharks are found in most temperate waters throughout the world, and are most common around Australia, South Africa and Northern California. Their diet consists of warm-blooded mammals, primarily pinnipeds (seals and sea lions), but also whales, dolphins, fish and squid. Caught for their jaws, teeth, leather and fins, which collect high prices and are in demand worldwide, great white sharks also face the threat of accidental capture in fishing gear, and animals that survive are often killed for their body parts.',
    ImageUrl: 'GreatWhiteShark.jpg'
  },
  {
    name: 'Whale Shark',
    category: 'Fish',
    inventory: 20,
    description:
      'Whale sharks can be found in all temperate and tropical oceans around the world, with the exception of the Mediterranean Sea. Measuring up to 45 feet in length, these giants subsist on a diet of krill, squid and small fish. It is thought that whale sharks may have a lifespan of 100 to 150 years. The whale shark is a filter feeder, one of only three species of shark that feed by sucking water through its mouth and expelling it through the gills, trapping millions of plankton. These gentle creatures are at risk from commercial fishing for food.',
    ImageUrl: 'WhaleShark.jpg'
  },
  {
    name: 'Sockeye Salmon',
    category: 'Fish',
    inventory: 30,
    description:
      'Juveniles spend one to three years in freshwater before migrating to the ocean. In preparation for migration to the sea from lakes and rivers, sockeye salmon gills and kidneys begin to change to process salt water. At sea, they are metallic blue and silver, but at spawning, adults display bright red bodies and green heads. They usually remain at sea for two years and then return to spawn. At maturity, they all migrate back to their natal freshwater, spawn and die. Males compete for females and females compete for the best gravel nest site where they deposit 2,000 to 5,000 eggs.',
    ImageUrl: 'SockeyeSalmon.jpg'
  }
]

const users = [
  {
    firstName: 'Frank',
    lastName: 'FullStack',
    email: 'frank@email.com',
    password: '123',
    role: 'admin'
  },
  {
    firstName: 'Stuart',
    lastName: 'Byte',
    email: 'stuart@email.com',
    password: '456',
    role: 'user'
  },
  {
    firstName: 'Rui',
    lastName: 'Nerds',
    email: 'rui@email.com',
    password: '789',
    role: 'user'
  }
]

const prices = [
  {
    currentPrice: 1750,
    effectiveDate: new Date('2019-01-02')
  },
  {
    currentPrice: 2300,
    effectiveDate: new Date('2019-01-03')
  },
  {
    currentPrice: 3000,
    effectiveDate: new Date('2019-01-04')
  },
  {
    currentPrice: 2700,
    effectiveDate: new Date('2019-01-05')
  },
  {
    currentPrice: 1600,
    effectiveDate: new Date('2019-01-01')
  },
  {
    currentPrice: 1200,
    effectiveDate: new Date('2019-01-02')
  },
  {
    currentPrice: 1000,
    effectiveDate: new Date('2019-01-02')
  },
  {
    currentPrice: 2000,
    effectiveDate: new Date('2019-01-03')
  },
  {
    currentPrice: 2350,
    effectiveDate: new Date('2019-01-04')
  },
  {
    currentPrice: 2500,
    effectiveDate: new Date('2019-01-06')
  },
  {
    currentPrice: 1300,
    effectiveDate: new Date('2019-01-06')
  },
  {
    currentPrice: 2100,
    effectiveDate: new Date('2019-01-03')
  }
]

// const orderLines = [
//   {
//     quantity: 3,
//     subTotal: 3000,
//     orderId: 1,
//     speciesId: 1,
//     priceId: 1
//   }
// ]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const dbSpecies = await Promise.all(
    species.map(animal => Species.create(animal))
  )
  const dbUsers = await Promise.all(users.map(user => User.create(user)))
  const dbPrices = await Promise.all(prices.map(price => Price.create(price)))
  //await Promise.all(orderLines.map(orderLine => OrderLine.create(orderLine)))

  // console.log('Species Methods')
  // console.log(Object.keys(dbSpecies[0].__proto__))

  // console.log('Price Methods')
  // console.log(Object.keys(dbPrices[0].__proto__))
  // await dbPrices.forEach(price =>
  //   price.setSpecies(
  //     dbSpecies.forEach(animal => {
  //       return animal
  //     })
  //   )
  // )

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
