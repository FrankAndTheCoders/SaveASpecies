import axios from 'axios'

//  State
const initialState = {
  cart: []
  //order: []
}

//  Action Types
const LOAD_CART = 'LOAD_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const PLACE_ORDER = 'PLACE_ORDER'

//  Action Creators
const loadCart = () => ({type: LOAD_CART})
// export const addToCart = animal => ({type: ADD_TO_CART, animal})
export const addToCart = animal => ({type: ADD_TO_CART, animal})
export const removeFromCart = animal => ({
  type: REMOVE_FROM_CART,
  animal
})

const placedOrder = () => ({
  type: PLACE_ORDER
})

//  Thunk Creators
export const placeOrder = (totalAmount, purchaseDate) => async dispatch => {
  try {
    const response = await axios.post('/api/checkout', {
      totalAmount,
      purchaseDate
    })
    const action = placedOrder()
    dispatch(action)
  } catch (error) {
    console.error(error)
  }
}

//  Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.map(anml => anml.name).includes(action.animal.name)
          ? state.cart
          : state.cart.concat([{...action.animal, quantity: 1}])
      }
    case REMOVE_FROM_CART:
      return {...state, cart: state.cart.filter(elem => elem !== action.animal)}
    case PLACE_ORDER:
      return {...state, cart: []}
    default:
      return state
  }
}
