import React from 'react'

import CartItem from './CartItem'
import PlaceOrder from './PlaceOrder'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import {withStyles} from '@material-ui/core/styles'

import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import Close from '@material-ui/icons/Close'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'

const drawerWidth = 260

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  }
})

class Cart extends React.Component {
  constructor(props) {
    super(props)
    const {closeFunc, open} = props
    this.state = {
      showCart: open,
      closeFunc,
      cart: ['Echo', 'Fox trot', 'Golf']
    }
    this.removeFromCart = this.removeFromCart.bind(this)
  }

  removeFromCart = index => {
    this.setState(prevState => {
      console.log(index)
      console.log(`The cart Before =\t${prevState.cart}`)
      const cart = prevState.cart.filter((item, i) => i !== index)
      console.log(`The cart after =\t${cart}`)
      return {cart}
    })
  }

  componentDidUpdate() {
    console.log('Cart updated')
  }

  render() {
    const {classes, theme} = this.props
    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={this.state.showCart}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.state.closeFunc}>
            <Close />
          </IconButton>
        </div>
        <Divider />
        <List>
          {this.state.cart.map((text, index) => (
            <CartItem
              animal={text}
              key={index}
              index={index}
              remove={this.removeFromCart}
            />
          ))}
        </List>
        <Divider />
        <PlaceOrder />
      </Drawer>
    )
  }
}

Cart.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, {withTheme: true})(Cart)
