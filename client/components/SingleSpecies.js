import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {} from '../store'
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
  CardMedia,
  withStyles
} from '@material-ui/core'
import PropTypes from 'prop-types'

const indSpecies = {
  id: 1,
  name: 'Slow Loris',
  category: 'Mammals',
  inventory: 11,
  description:
    'Slow lorises are nocturnal and arboreal, or tree-dwelling, primates. They move with slow, deliberate hand-over-hand movements through the trees but can move quickly if necessary. A keen sense of smell helps them locate prey in the dark, and their strong grasp allows them to stay in one position for hours.',
  ImageUrl: 'SlowLoris.jpg',
  price: {
    currentPrice: 1750
  }
}

const styles = theme => ({
  text: {
    fontSize: 20
  },
  button: {
    margin: theme.spacing.unit
  },
  media: {
    height: 280
  },
  speciesText: {
    paddingBottom: theme.spacing.unit * 5,
    fontWeight: 'bold'
  }
})

class SingleSpecies extends Component {
  //   componentDidMount() {
  //const category = this.props.match.params.animalGroup
  //     const indSpecies = this.props.match.params.speciesName
  //     this.props.
  //   }

  render() {
    // const indSpecies = this.props.singleSpecies
    const {classes} = this.props
    return (
      <div className="allSpecies">
        <Typography
          variant="h4"
          color="inherit"
          className={classes.speciesText}
        >
          {indSpecies.name}
        </Typography>
        <Grid container spacing={40}>
          <Grid item xs={3}>
            <Card>
              <CardMedia
                className={classes.media}
                // image={indSpecies.ImageUrl}
              />
              <CardContent>
                <Typography className={classes.text}>
                  {indSpecies.name}
                </Typography>
                <Typography className={classes.text}>{`$${
                  indSpecies.price.currentPrice
                }`}</Typography>
              </CardContent>
              <CardActions>
                <Grid container spacing={0} justify="space-between">
                  <Grid item>
                    <Button variant="outlined" className={classes.button}>
                      Add to Cart
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" className={classes.button}>
                      View More Info
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}

SingleSpecies.propTypes = {
  classes: PropTypes.object.isRequired
}

// const mapState = state => ({
//   singleSpecies: state.singleSpecies.singleSpecies
// })

// const mapDispatch = dispatch => ({
//   fetchSingleSpecies: (speciesId) => dispatch()
// })

// const ConnectedSingleCategory = withRouter(
//   connect(mapState, mapDispatch)(SingleSpecies)
// )

// export default withStyles(styles)(ConnectedSingleSpecies)

export default withStyles(styles)(SingleSpecies)
