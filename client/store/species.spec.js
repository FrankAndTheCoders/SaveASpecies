import {expect} from 'chai'
import {getSpecies, getSingleSpecies} from './species'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = {species: [], singleSpecies: []}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('getSpecies', () => {
    it('eventually dispatches the GET_ALL_SPECIES action', async () => {
      const species = [
        {
          id: 1,
          name: 'Slow Loris',
          category: 'Mammals',
          inventory: 11,
          description:
            'Slow lorises are nocturnal and arboreal, or tree-dwelling, primates. They move with slow, deliberate hand-over-hand movements through the trees but can move quickly if necessary. A keen sense of smell helps them locate prey in the dark, and their strong grasp allows them to stay in one position for hours.',
          ImageUrl: 'SlowLoris.jpg'
        },
        {
          id: 2,
          name: 'Sloth Bear',
          category: 'Mammals',
          inventory: 15,
          description:
            'Sloth bears live in a variety of habitats on the Indian subcontinent. They have long, shaggy hair and primarily feed on termites and ants. Females usually give birth to one or two young, and carry their cubs on their backs for several months to protect them from predators. Cubs stay with their mothers for up to two and a half years. The biggest threats to sloth bears are habitat loss and poaching.',
          ImageUrl: 'SlothBear.jpg'
        }
      ]
      mockAxios.onGet('/api/species').replyOnce(200, species)
      await store.dispatch(getSpecies())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_ALL_SPECIES')
      expect(actions[0].species).to.be.deep.equal(species)
    })
  })

  describe('getSingleSpecies', () => {
    it('eventually dispatches the GET_SINGLE_SPECIES action', async () => {
      const indSpecies = [
        {
          id: 1,
          name: 'Slow Loris',
          category: 'Mammals',
          inventory: 11,
          description:
            'Slow lorises are nocturnal and arboreal, or tree-dwelling, primates. They move with slow, deliberate hand-over-hand movements through the trees but can move quickly if necessary. A keen sense of smell helps them locate prey in the dark, and their strong grasp allows them to stay in one position for hours.',
          ImageUrl: 'SlowLoris.jpg'
        }
      ]
      mockAxios.onGet('/api/species/1').replyOnce(200, indSpecies)
      await store.dispatch(getSingleSpecies(1))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_SINGLE_SPECIES')
      expect(actions[0].singleSpecies).to.be.deep.equal(indSpecies)
    })
  })
})
