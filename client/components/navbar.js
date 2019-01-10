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
          <Grid container alignItems="center" spacing={16} direction="row">
            <Grid item>
              <IconButton color="inherit">
                <Home />
              </IconButton>
            </Grid>
            <Grid item>
              <Button color="inherit">
                <Typography>Birds</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button color="inherit">
                <Typography>Mammals</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button color="inherit">
                <Typography>Fish</Typography>
              </Button>
            </Grid>
          </Grid>
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
