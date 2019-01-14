import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Button,
  IconButton,
  CardMedia
} from '@material-ui/core'
import {Home, ShoppingCart, Menu} from '@material-ui/icons'

class Navbar extends Component {
  constructor() {
    super()
    this.state = {}
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {}

  render() {
    return (
      <AppBar position="fixed">
        <Toolbar>
          <Grid container alignItems="center" spacing={16} direction="row">
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

          <Grid container justify="flex-end" alignItems="center" spacing={16}>
            <Grid item>
              <NavLink to="/cart">
                <IconButton color="inherit">
                  <ShoppingCart />
                </IconButton>
              </NavLink>
            </Grid>
            {this.props.user.id ? (
              <div>
                <Grid item>
                  <NavLink to="/user">
                    <Button color="inherit">{this.props.user.firstName}</Button>
                  </NavLink>
                </Grid>

                <Grid item>
                  <NavLink to="/login">
                    <Button color="inherit" onClick={this.handleLogout}>
                      Logout
                    </Button>
                  </NavLink>
                </Grid>
              </div>
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
    )
  }
}

const mapState = state => {
  return {
    user: state.user.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
