const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Species = db.model('species')
const Price = db.model('price')

describe('Species routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/species', () => {
    beforeEach(() => {
      return Species.bulkCreate([
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
        }
      ])
    })

    beforeEach(() => {
      const today = new Date()
      return Price.bulkCreate([
        {
          currentPrice: 100000,
          speciesId: 1,
          effectiveDate: new Date(today.getTime()).setDate(today.getDate() - 7)
        },
        {
          currentPrice: 200000,
          speciesId: 2,
          effectiveDate: new Date(today.getTime()).setDate(today.getDate() - 15)
        }
      ])
    })

    it('GET /api/species', async () => {
      const res = await request(app)
        .get('/api/species')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal('Slow Loris')
      expect(res.body[0].currentPrice).to.be.equal(100000)
      expect(res.body[0].category).to.be.equal('Mammals')
      expect(res.body[1].name).to.be.equal('Sloth Bear')
    })

    it('GET /api/species/:id when id is 1', async () => {
      const res = await request(app)
        .get('/api/species/1')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal('Slow Loris')
      expect(res.body[0].currentPrice).to.be.equal(100000)
      expect(res.body[0].category).to.be.equal('Mammals')
    })

    it('GET /api/species/:id when id is 2', async () => {
      const res = await request(app)
        .get('/api/species/2')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal('Sloth Bear')
      expect(res.body[0].currentPrice).to.be.equal(200000)
      expect(res.body[0].category).to.be.equal('Mammals')
    })
  })
})
