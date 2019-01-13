import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {getSingleSpecies} from '../store/species'
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
  CardMedia,
  withStyles,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  FormControl
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
    height: 280
  },
  speciesText: {
    paddingBottom: theme.spacing.unit * 5,
    fontWeight: 'bold'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
})

class SingleSpecies extends Component {
  constructor() {
    super()
    this.state = {
      quantity: '',
      labelWidth: 0
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    })
    const speciesId = this.props.match.params.speciesName
    this.props.fetchSingleSpecies(speciesId)
  }

  render() {
    console.log(this.state)
    const indSpecies = this.props.singleSpecies[0]
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
                image={`/${indSpecies.ImageUrl}`}
              />
              <CardContent>
                <Typography className={classes.text}>
                  {indSpecies.name}
                </Typography>
                <Typography className={classes.text}>{`$${
                  indSpecies.currentPrice
                }`}</Typography>
                <Typography className={classes.text}>
                  {indSpecies.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Grid container spacing={0} justify="space-between">
                  <Grid item>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel
                        ref={ref => {
                          this.InputLabelRef = ref
                        }}
                        htmlFor="outlined-quantity"
                      >
                        Quantity
                      </InputLabel>
                      <Select
                        value={this.state.quantity}
                        onChange={this.handleChange}
                        input={
                          <OutlinedInput
                            labelWidth={this.state.labelWidth}
                            name="quantity"
                            id="outlined-quantity"
                          />
                        }
                      >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" className={classes.button}>
                      Add to Cart
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

const mapState = state => ({
  singleSpecies: state.species.singleSpecies
})

const mapDispatch = dispatch => ({
  fetchSingleSpecies: speciesId => dispatch(getSingleSpecies(speciesId))
})

const ConnectedSingleSpecies = withRouter(
  connect(mapState, mapDispatch)(SingleSpecies)
)

export default withStyles(styles)(ConnectedSingleSpecies)
