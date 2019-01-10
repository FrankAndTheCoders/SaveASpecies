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
import {Home, Menu} from '@material-ui/icons'

class Navbar extends Component {
  render() {
    return (
      <AppBar position="sticky">
        <Toolbar>
          <IconButton color="inherit">
            <Home />
          </IconButton>
          <Button color="inherit">
            <Typography>Birds</Typography>
          </Button>
          <Button color="inherit">
            <Typography>Mammals</Typography>
          </Button>
          <Button color="inherit">
            <Typography>Fish</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    )
  }
}

// const mapState = state => {
//   return {
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

export default connect(null, null)(Navbar)

// /**
//  * PROP TYPES
//  */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
