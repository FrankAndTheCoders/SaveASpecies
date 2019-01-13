import React from 'react'
import {connect} from 'react-redux'

import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core'
import Button from '@material-ui/core/Button'

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
  state = {}

  addToCart() {
    console.log('Add to cart')
  }

  render() {
    const {classes, animal} = this.props
    return (
      <Button
        variant="outlined"
        className={classes.button}
        onClick={this.addToCart}
      >
        Add to Cart (Separate)
      </Button>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({})

AddToCartButton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect(mapState, mapDispatch)(
  withStyles(styles)(AddToCartButton)
)
