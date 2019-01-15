import React from 'react'
import {Link, withRouter} from 'react-router-dom'

import Fab from '@material-ui/core/Fab'
import ShoppingBasketOutlined from '@material-ui/icons/ShoppingBasketOutlined'

class PlaceOrder extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.history.push('/checkout')
    this.props.closeCart()
  }

  render() {
    const {cart} = this.props
    return (
      <Fab
        variant="extended"
        color="primary"
        disabled={cart.length === 0}
        onClick={() => this.handleClick()}
      >
        <ShoppingBasketOutlined />
        Checkout
      </Fab>
    )
  }
}


export default withRouter(PlaceOrder)
