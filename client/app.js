/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import {connect} from 'react-redux'
import {NavLink, withRouter} from 'react-router-dom'

//  Save-A-Species Components
import Routes from './routes'
import CartItem from './components/CartItem'
import PlaceOrder from './components/PlaceOrder'
import {addToCart, removeFromCart} from './store/cart'
import {logout} from './store/user'

//  Material-UI Components
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
// import {AppBar, Toolbar, Grid, Button, IconButton} from '@material-ui/core'

//  Material-UI Icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MenuIcon from '@material-ui/icons/Menu'
import MailIcon from '@material-ui/icons/Mail'
import Close from '@material-ui/icons/Close'
import Home from '@material-ui/icons/Home'
import ShoppingCart from '@material-ui/icons/ShoppingCart'

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
  badge: {
    top: '50%',
    right: -3,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
    }`
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

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    this.props.logout()
  }

  handleDrawerOpen = () => {
    this.setState({open: true})
  }

  handleDrawerClose = () => {
    this.setState({open: false})
  }

  removeFromCart = animal => {
    this.props.removeFromCart(animal)
  }

  componentDidMount() {
    // if (this.props.location.pathname === '/checkout' && this.state.open) {
    //   console.log('CLose it2')
    //   // this.handleDrawerClose()
    //   // showCartIcon = true
    // } else {
    //   console.log('Leave it alone2')
    //   // showCartIcon = false
    // }
  }

  componentDidUpdate(prevProps) {}

  render() {
    const {classes, cart} = this.props
    const {open} = this.state
    // console.log('App')
    // console.log(this.props)
    // let showCartIcon = false?

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={0}
            >
              <Grid item>
                <NavLink to="/">
                  <IconButton color="inherit">
                    <Home />
                  </IconButton>
                </NavLink>
              </Grid>

              <Grid item>
                <NavLink to="/birds">
                  <Button color="inherit">Birds</Button>
                </NavLink>
              </Grid>

              <Grid item>
                <NavLink to="/mammals">
                  <Button color="inherit">Mammals</Button>
                </NavLink>
              </Grid>

              <Grid item>
                <NavLink to="/fish">
                  <Button color="inherit">Fish</Button>
                </NavLink>
              </Grid>
            </Grid>

            <Grid
              container
              justify="flex-end"
              alignItems="center"
              spacing={0}
              direction="row"
            >
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  disabled={this.props.location.pathname === '/checkout'}
                  onClick={this.handleDrawerOpen}
                  className={classNames(
                    classes.menuButton,
                    open && classes.hide
                  )}
                >
                  <Badge
                    badgeContent={cart.length}
                    color="error"
                    classes={{badge: classes.badge}}
                    invisible={cart.length === 0}
                  >
                    <ShoppingCart invisible="false" />
                  </Badge>
                </IconButton>
              </Grid>

              {this.props.user.id ? (
                <Grid item>
                  <NavLink to="/user">
                    <Button color="inherit">{this.props.user.firstName}</Button>
                  </NavLink>

                  <NavLink to="/login">
                    <Button color="inherit" onClick={this.handleLogout}>
                      Logout
                    </Button>
                  </NavLink>
                </Grid>
              ) : (
                <Grid item>
                  <NavLink to="/login">
                    <Button color="inherit">Login</Button>
                  </NavLink>
                </Grid>
              )}
            </Grid>
          </Toolbar>
        </AppBar>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <Routes closeCheckout={this.handleDrawerClose} />
        </main>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <Close />
            </IconButton>
          </div>
          <Divider />
          <List>
            {cart.map(animal => (
              <CartItem
                animal={animal}
                key={animal.id}
                remove={this.removeFromCart}
              />
            ))}
          </List>
          <Divider />
          <PlaceOrder cart={cart} />
        </Drawer>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
  order: state.cart.order,
  user: state.user
})

const mapDispatchToProps = {removeFromCart, logout}

const ConnectedApp = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
)

export default withStyles(styles, {withTheme: true})(ConnectedApp)
