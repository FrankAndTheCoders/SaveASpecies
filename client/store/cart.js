import axios from 'axios'

//  State
const initialState = window.localStorage.cart
  ? {cart: JSON.parse(window.localStorage.getItem('cart')).cart}
  : {cart: []}

//  Action Types
const LOAD_CART = 'LOAD_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const PLACE_ORDER = 'PLACE_ORDER'

//  Action Creators
const loadCart = () => ({type: LOAD_CART})

export const addToCart = animal => {
  return {type: ADD_TO_CART, animal}
}

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
      let returnState = {
        ...state,
        cart: state.cart.map(anml => anml.name).includes(action.animal.name)
          ? state.cart
          : state.cart.concat([{...action.animal, quantity: 1}])
      }

      window.localStorage.setItem('cart', JSON.stringify(returnState))

      return returnState
    case REMOVE_FROM_CART:
      window.localStorage.setItem(
        'cart',
        JSON.stringify({
          ...state,
          cart: state.cart.filter(elem => elem !== action.animal)
        })
      )
      return {...state, cart: state.cart.filter(elem => elem !== action.animal)}
    case PLACE_ORDER:
      window.localStorage.clear()
      return {...state, cart: []}
    default:
      return state
  }
}

// function editLocalStorage(animal) {
//   if (window.localStorage.getItem('cart')) {
//     let originalCart = JSON.parse(window.localStorage.getItem('cart'))
//     originalCart.push(animal)
//     window.localStorage.setItem('cart', JSON.stringify(originalCart));
//     console.log(window.localStorage.getItem('cart'))
//   } else {
//     window.localStorage.setItem('cart', JSON.stringify([animal]));
//   }
// }
