/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import {NavLink} from 'react-router-dom'

//  Save-A-Species Components
import Routes from './routes'
import CartItem from './components/CartItem'
import PlaceOrder from './components/PlaceOrder'

//  Material-UI Components
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
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
  state = {
    open: true,
    cart: ['Alfa', 'Bravo', 'Charlee', 'Delta']
  }

  handleDrawerOpen = () => {
    this.setState({open: true})
  }

  handleDrawerClose = () => {
    this.setState({open: false})
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
    console.log('Updated')
  }

  render() {
    const {classes, theme} = this.props
    const {open} = this.state

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

            <Grid container justify="flex-end" alignItems="center" spacing={16}>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(
                    classes.menuButton,
                    open && classes.hide
                  )}
                >
                  <ShoppingCart />
                </IconButton>
              </Grid>

              <Grid item>
                <NavLink to="/user">
                  <Button color="inherit">Stuart</Button>
                </NavLink>
              </Grid>

              <Grid item>
                <NavLink to="/login">
                  <Button color="inherit" onClick={this.handleLogout}>
                    Logout
                  </Button>
                </NavLink>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <Routes />
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
            {this.state.cart.map((text, index) => (
              <CartItem
                animal={text}
                key={index}
                index={index}
                remove={this.removeFromCart}
              />
              // <MediaCard animal={text} key={index} />
            ))}
          </List>
          <Divider />
          <PlaceOrder />
        </Drawer>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, {withTheme: true})(App)
