import React from 'react'
import {connect} from 'react-redux'

import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import {addToCart, removeFromCart} from '../store/cart'

const styles = theme => ({
  text: {
    fontSize: 20
  },
  button: {
    margin: theme.spacing.unit
  },
  media: {
    height: 270
  },
  speciesText: {
    paddingBottom: theme.spacing.unit * 5,
    fontWeight: 'bold'
  }
})

class AddToCartButton extends React.Component {
  constructor() {
    super()
  }

  addToCart() {}

  render() {
    const {classes, animal} = this.props
    // console.log(this.props)
    return (
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => this.props.addItemToCart(animal)}
      >
        Add to Cart (Separate)
      </Button>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({
  addItemToCart: animal => dispatch(addToCart(animal))
})

AddToCartButton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect(mapState, mapDispatch)(
  withStyles(styles)(AddToCartButton)
)
