/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../../index')
const OrderLine = db.model('orderLine')

describe('OrderLine model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('saving an object', async () => {
    const quantity = Math.floor(Math.random() * 50) + 1
    let subTotal = Math.floor(Math.random() * 1000) + 1
    subTotal *= 100
    const line = await OrderLine.create({quantity, subTotal})

    it('returns the correct value for each field', () => {
      expect(line.quantity).to.be.equal(quantity)
      expect(line.subTotal).to.be.equal(subTotal)
    })
  })
})
