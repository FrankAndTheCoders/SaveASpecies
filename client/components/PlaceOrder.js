import React from 'react'
import Fab from '@material-ui/core/Fab'
import ShoppingBasketOutlined from '@material-ui/icons/ShoppingBasketOutlined'

class PlaceOrder extends React.Component {
  render() {
    const {cart} = this.props
    console.log(`Order button rendered:\t${cart}`)
    return (
      <Fab variant="extended" color="primary" disabled={cart.length === 0}>
        <ShoppingBasketOutlined />
        Place Order
      </Fab>
    )
  }
}

export default PlaceOrder
