/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../../index')
const Species = db.model('species')

describe('Species model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('seeding', () => {
      let species

      beforeEach(async () => {
        species = await Species.create({
          name: 'Tiger',
          category: 'Mammals',
          inventory: 13
        })
      })

      it('returns the correct input name', () => {
        expect(species.name).to.be.equal('Tiger')
      })
      it('returns the correct input category', () => {
        expect(species.category).to.be.equal('Mammals')
      })
      it('returns the correct input category', () => {
        expect(species.inventory).to.equal(13)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
