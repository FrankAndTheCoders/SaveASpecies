/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../../index')
// const {OrderLine} = require('../index')
const OrderLine = db.model('orderLine')

describe('OrderLine model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('saving an object', async () => {
    try {
      let line = await OrderLine.create({quantity: 11, subTotal: 11200})
      // console.log(line)
    } catch (error) {
      console.log(error)
    }
    it('returns the correct value for each field', () => {
      expect(false).to.be.equal(true)
    })
  })
})
