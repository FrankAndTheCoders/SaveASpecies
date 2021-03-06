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
import {default as AddToCart} from './AddToCart'

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

class SingleCategory extends Component {
  componentDidMount() {
    this.props.fetchAllSpecies()
  }

  render() {
    const {classes} = this.props
    const animalGroup = this.props.match.params.animalGroup
    const species = this.props.species
    const category = species.filter(
      group => group.category.toLowerCase() === animalGroup
    )
    return (
      <div className="allSpecies">
        <Typography
          variant="h4"
          color="inherit"
          className={classes.speciesText}
        >
          {animalGroup[0].toUpperCase() + animalGroup.slice(1)}
        </Typography>
        <Grid container spacing={40}>
          {category.map(group => (
            <Grid item xs={3} key={group.id}>
              <Card>
                <Link to={`${animalGroup}/${group.id}`}>
                  <CardMedia className={classes.media} image={group.ImageUrl} />
                </Link>
                <CardContent>
                  <Typography className={classes.text}>{group.name}</Typography>
                  <Typography className={classes.text}>{`$${group.currentPrice /
                    100}`}</Typography>
                </CardContent>
                <CardActions>
                  <Grid container spacing={0} justify="space-between">
                    <Grid item>
                      <AddToCart animal={group} />
                    </Grid>
                    <Grid item>
                      <Link to={`${animalGroup}/${group.id}`}>
                        <Button variant="outlined" className={classes.button}>
                          View More Info
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}

SingleCategory.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapState = state => ({
  species: state.species.species
})

const mapDispatch = dispatch => ({
  fetchAllSpecies: () => dispatch(getSpecies())
})

const ConnectedSingleCategory = withRouter(
  connect(mapState, mapDispatch)(SingleCategory)
)

export default withStyles(styles)(ConnectedSingleCategory)
