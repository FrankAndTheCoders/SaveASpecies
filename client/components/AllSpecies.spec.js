import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AllSpecies from './AllSpecies'
import store from '../store/index'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('AllSpecies', () => {
  let allSpecies
  const species = [
    {
      currentPrice: 100000,
      name: 'Whale Shark',
      category: 'Fish',
      inventory: 20,
      description:
        'Whale sharks can be found in all temperate and tropical oceans around the world, with the exception of the Mediterranean Sea. Measuring up to 45 feet in length, these giants subsist on a diet of krill, squid and small fish. It is thought that whale sharks may have a lifespan of 100 to 150 years. The whale shark is a filter feeder, one of only three species of shark that feed by sucking water through its mouth and expelling it through the gills, trapping millions of plankton. These gentle creatures are at risk from commercial fishing for food.',
      ImageUrl: 'WhaleShark.jpg'
    },
    {
      currentPrice: 200000,
      name: 'Sockeye Salmon',
      category: 'Fish',
      inventory: 30,
      description:
        'Juveniles spend one to three years in freshwater before migrating to the ocean. In preparation for migration to the sea from lakes and rivers, sockeye salmon gills and kidneys begin to change to process salt water. At sea, they are metallic blue and silver, but at spawning, adults display bright red bodies and green heads. They usually remain at sea for two years and then return to spawn. At maturity, they all migrate back to their natal freshwater, spawn and die. Males compete for females and females compete for the best gravel nest site where they deposit 2,000 to 5,000 eggs.',
      ImageUrl: 'SockeyeSalmon.jpg'
    }
  ]
  beforeEach(() => {
    allSpecies = shallow(<AllSpecies species={species} store={store} />)
  })

  it('should receive a prop called `species` initialized to be an empty array', () => {
    expect(allSpecies.props().species).to.be.an('array')
  })
  it('should fetch all species', async () => {
    await expect(allSpecies.instance().componentDidMount()).to.be.fulfilled
  })
})
