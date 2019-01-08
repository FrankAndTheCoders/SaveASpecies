/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Price = db.model('price')

describe('Price model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('seeding', () => {
      let price

      beforeEach(async () => {
        price = await Price.create({
          currentPrice: 2,
          effectiveDate: new Date()
        })
      })

      it('returns true if the price is correct', () => {
        expect(price.currentPrice).to.equal(2)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
