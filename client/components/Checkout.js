import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  Button,
  withStyles
} from '@material-ui/core'
import PropTypes from 'prop-types'

const orderLines = [
  {speciesName: 'Leopard Shark', quantity: 3, price: 300000, orderId: 1},
  {speciesName: 'Panda', quantity: 2, price: 1000, orderId: 1},
  {speciesName: 'Manatee', quantity: 5, price: 1000, orderId: 1},
  {speciesName: 'Eagle', quantity: 1, price: 1000, orderId: 2},
  {speciesName: 'Woodpecker', quantity: 6, price: 1000, orderId: 2}
]

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`
  },
  total: {
    fontWeight: '700'
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
  render() {
    const {classes} = this.props

    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Typography variant="h6" gutterBottom>
            Order summary
          </Typography>
          <List disablePadding>
            {orderLines
              .filter(orderLine => orderLine.orderId === 1)
              .map(orderLine => (
                <ListItem className={classes.listItem} key={orderLine.name}>
                  <ListItemText
                    primary={orderLine.speciesName}
                    secondary={`Quantity ${orderLine.quantity}`}
                  />
                  <Typography variant="body2">
                    {`$${orderLine.price / 100}`}
                  </Typography>
                </ListItem>
              ))}
            <ListItem className={classes.listItem}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" className={classes.total}>
                $34.06
              </Typography>
            </ListItem>
          </List>
          <Button variant="outlined">Place Order</Button>
        </Paper>
      </main>
    )
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Checkout)
