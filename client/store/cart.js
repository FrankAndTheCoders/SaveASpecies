//  State
const initialState = {
  // showCart: false,
  cart: ['Yankee', 'Zulu'],
  order: ['Order line1']
}

//  Action Types
const LOAD_CART = 'LOAD_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

//  Action Creators
const loadCart = () => ({type: LOAD_CART})
export const addToCart = animal => ({type: ADD_TO_CART, animal})
export const removeFromCart = index => ({
  type: REMOVE_FROM_CART,
  index
})

//  Thunk Creators

//  Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.includes(action.animal)
          ? state.cart
          : state.cart.concat([action.animal])
      }
    case REMOVE_FROM_CART:
      return {...state, cart: state.cart.filter((_, i) => i !== action.index)}
    default:
      return state
  }
}
