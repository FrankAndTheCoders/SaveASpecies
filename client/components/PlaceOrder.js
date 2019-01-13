import React from 'react'
import Fab from '@material-ui/core/Fab'
import ShoppingBasketOutlined from '@material-ui/icons/ShoppingBasketOutlined'

export default function PlaceOrder(props) {
  return (
    <Fab variant="extended">
      <ShoppingBasketOutlined />
      Place Order
    </Fab>
  )
}
