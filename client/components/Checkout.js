import React, {Component} from 'react'
import {connect} from 'react-redux'
import {placeOrder} from '../store/cart'
import PlaceOrderButton from './Thank-you'
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  Button,
  Divider,
  withStyles
} from '@material-ui/core'
import PropTypes from 'prop-types'

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`
  },
  total: {
    fontWeight: '700'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  }
})

class Checkout extends Component {
  constructor() {
    super()
    this.state = {
      totalAmount: '',
      date: new Date()
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const total = this.props.orderLines.reduce((acc, cur) => {
      acc += cur.quantity * cur.currentPrice
      return acc
    }, 0)
    this.setState({
      totalAmount: total
    })
  }

  handleClick() {
    if (this.state.totalAmount !== '') {
      const order = {}
      order.purchaseDate = this.state.date
      order.isPurchased = true
      order.totalAmount = this.state.totalAmount
      order.lines = this.props.orderLines.map(ln => {
        const {currentPrice, id, quantity, name} = ln
        const line = {currentPrice, id, name, quantity}
        line.subTotal = ln.quantity * ln.currentPrice
        return line
      })

      this.props.placeOrder(order)
      while (this.props.orderLines.length) {
        this.props.orderLines.pop()
      }
      this.setState({
        totalAmount: '',
        date: new Date()
      })
    }
  }

  render() {
    const {classes} = this.props
    const orderLines = this.props.orderLines

    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Typography variant="h6" gutterBottom>
            Order summary
          </Typography>
          <Divider />
          <List disablePadding>
            {orderLines.map(orderLine => (
              <ListItem className={classes.listItem} key={orderLine.id}>
                <ListItemText
                  primary={orderLine.name}
                  secondary={`Quantity ${orderLine.quantity}`}
                />
                <Typography variant="body2">
                  {`$${orderLine.currentPrice / 100}`}
                </Typography>
              </ListItem>
            ))}
            <Divider />
            <ListItem className={classes.listItem}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" className={classes.total}>
                {`$${this.state.totalAmount / 100}`}
              </Typography>
            </ListItem>
          </List>
          <div className={classes.buttons}>
            <Button
              variant="outlined"
              className={classes.button}
              onClick={() => this.props.history.push('/')}
            >
              Back
            </Button>
            <PlaceOrderButton handleClick={this.handleClick} />
          </div>
        </Paper>
      </main>
    )
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapState = state => ({
  orderLines: state.cart.cart
})

const mapDispatch = dispatch => ({
  placeOrder: (totalAmount, purchaseDate) =>
    dispatch(placeOrder(totalAmount, purchaseDate))
})

export default connect(mapState, mapDispatch)(withStyles(styles)(Checkout))
