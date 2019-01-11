import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_SPECIES = 'GET_ALL_SPECIES'
const GET_SINGLE_SPECIES = 'GET_SINGLE_SPECIES'

/**
 * INITIAL STATE
 */
const initialState = {
  species: [],
  singleSpecies: []
}

/**
 * ACTION CREATORS
 */
const gotSpecies = species => ({type: GET_ALL_SPECIES, species})
const gotSingleSpecies = singleSpecies => ({
  type: GET_SINGLE_SPECIES,
  singleSpecies
})

/**
 * THUNK CREATORS
 */
export const getSpecies = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/species')
    dispatch(gotSpecies(data))
  } catch (err) {
    console.error(err)
  }
}

export const getSingleSpecies = speciesName => async dispatch => {
  try {
    const {data} = await axios.get(`/api/species/${speciesName}`)
    dispatch(gotSingleSpecies(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SPECIES:
      return {...state, species: action.species}
    case GET_SINGLE_SPECIES:
      return {...state, singleSpecies: action.singleSpecies}
    default:
      return state
  }
}
