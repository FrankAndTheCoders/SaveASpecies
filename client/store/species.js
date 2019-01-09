import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_SPECIES = 'GET_ALL_SPECIES'

/**
 * INITIAL STATE
 */
const initialState = {
  species: []
}

/**
 * ACTION CREATORS
 */
const gotSpecies = species => ({type: GET_ALL_SPECIES, species})

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

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SPECIES:
      return {...state, species: action.species}
    default:
      return state
  }
}
