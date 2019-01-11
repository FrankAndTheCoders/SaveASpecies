import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {getSpecies} from '../store/species'
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

class AllSpecies extends Component {
  componentDidMount() {
    this.props.fetchAllSpecies()
  }

  render() {
    const {classes} = this.props
    return (
      <div className="allSpecies">
        <Typography
          variant="h4"
          color="inherit"
          className={classes.speciesText}
        >
          All Species
        </Typography>
        <Grid container spacing={40}>
          {this.props.species
            ? this.props.species.map(indSpecies => (
                <Grid item xs={3} key={indSpecies.id}>
                  <Card>
                    <CardMedia
                      className={classes.media}
                      image={indSpecies.ImageUrl}
                    />
                    <CardContent>
                      <Typography className={classes.text}>
                        {indSpecies.name}
                      </Typography>
                      <Typography
                        className={classes.text}
                      >{`$${indSpecies.currentPrice / 100}`}</Typography>
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
              ))
            : ''}
        </Grid>
      </div>
    )
  }
}

AllSpecies.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapState = state => ({
  species: state.species.species
})

const mapDispatch = dispatch => ({
  fetchAllSpecies: () => dispatch(getSpecies())
})

// export default withStyles(styles)(ConnectedAllSpecies)
export default connect(mapState, mapDispatch)(withStyles(styles)(AllSpecies))
