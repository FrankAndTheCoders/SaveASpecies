//  State
const initialState = {
  cart: [],
  order: []
}

//  Action Types
const LOAD_CART = 'LOAD_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

//  Action Creators
const loadCart = () => ({type: LOAD_CART})
// export const addToCart = animal => ({type: ADD_TO_CART, animal})
export const addToCart = animal => {
  console.log('Inside addToCart function:')
  console.log(animal)
  return {type: ADD_TO_CART, animal}
}
export const removeFromCart = animal => ({
  type: REMOVE_FROM_CART,
  animal
})

//  Thunk Creators

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
    default:
      return state
  }
}
