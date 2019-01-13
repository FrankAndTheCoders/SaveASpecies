import React from 'react'
import Fab from '@material-ui/core/Fab'
import ShoppingBasketOutlined from '@material-ui/icons/ShoppingBasketOutlined'

export default function PlaceOrder(props) {
  const {lineCount} = props
  return (
    <Fab variant="extended" color="primary" disabled={lineCount > 0}>
      <ShoppingBasketOutlined />
      Place Order
    </Fab>
  )
}
