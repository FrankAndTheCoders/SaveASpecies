import React from 'react'
import {Link, withRouter} from 'react-router-dom'

import Fab from '@material-ui/core/Fab'
import ShoppingBasketOutlined from '@material-ui/icons/ShoppingBasketOutlined'

class PlaceOrder extends React.Component {
  render() {
    const {cart} = this.props
    return (
      <Link to="/checkout">
        <Fab variant="extended" color="primary" disabled={cart.length === 0}>
          <ShoppingBasketOutlined />
          Checkout
        </Fab>
      </Link>
    )
  }
}

export default PlaceOrder
