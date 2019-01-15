import React from 'react'
import {connect} from 'react-redux'
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
  }
  render() {
    const {cart} = this.props
    console.log('Handle Click2:')
    console.log(this.props)
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

// const mapStateToProps = state => ({})

export default withRouter(PlaceOrder)
