import axios from 'axios'

const GET_ORDER_HISTORY = 'GET_ORDER_HISTORY'

const gotOrderHistory = orderHistory => ({
  type: GET_ORDER_HISTORY,
  orderHistory
})

export const getOrderHistory = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/cart/order/${userId}`)
    dispatch(gotOrderHistory(res.data))
  } catch (err) {
    console.error(err)
  }
}

const initialState = {
  orderHistory: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDER_HISTORY:
      return {...state, orderHistory: action.orderHistory}
    default:
      return state
  }
}
