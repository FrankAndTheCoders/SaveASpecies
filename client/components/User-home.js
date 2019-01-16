import React, {Component} from 'react'
import {connect} from 'react-redux'
import {me} from '../store/user'
import {getOrderHistory} from '../store/orderHistory'

class UserHome extends Component {
  componentDidMount() {
    this.props.getMe()
    this.props.getOrderHistory(this.props.id)
  }
  render() {
    console.log('ORDER HISTORY', this.props.orderHistory)
    const {firstName, email, orderHistory} = this.props
    return (
      <div>
        <h2>Welcome {firstName}!</h2>
        <h3>Email: {email}</h3>
        <div>Order History:</div>
        <div>
          {orderHistory.map(order => (
            <p key={order.id}>
              Total Amount: {order.totalAmount} Purchase Date:
              {order.purchaseDate}
            </p>
          ))}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  id: state.user.id,
  firstName: state.user.firstName,
  email: state.user.email,
  orderHistory: state.orderHistory.orderHistory
})

const mapDispatch = dispatch => ({
  getMe: () => dispatch(me()),
  getOrderHistory: userId => dispatch(getOrderHistory(userId))
})

export default connect(mapState, mapDispatch)(UserHome)
