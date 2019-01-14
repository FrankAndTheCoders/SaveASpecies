import axios from 'axios'

const PLACE_ORDER = 'PLACE_ORDER'

const placedOrder = order => ({
  type: PLACE_ORDER,
  order
})

export const placeOrder = (totalAmount, purchaseDate) => async dispatch => {
  try {
    const response = await axios.post('/api/checkout', {
      totalAmount,
      purchaseDate
    })
    const newOrder = response.data
    const action = placedOrder(newOrder)
    dispatch(action)
  } catch (error) {
    console.error(error)
  }
}

const initialState = {
  checkoutList: [{name: '', quantity: '', price: ''}]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case PLACE_ORDER:
      return {...state, checkoutList: action.order}
    default:
      return state
  }
}
