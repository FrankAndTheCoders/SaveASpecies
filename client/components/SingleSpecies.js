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
  card: {
    display: 'flex'
  },
  mainGrid: {
    paddingTop: theme.spacing.unit * 10
  },
  needPadding: {
    paddingLeft: theme.spacing.unit * 50,
    paddingRight: theme.spacing.unit * 50
  },
  text: {
    fontSize: 17
  },
  button: {
    margin: theme.spacing.unit
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
    const indSpecies = this.props.singleSpecies[0]
    const {classes} = this.props
    return (
      <Grid container justify="center" className={classes.mainGrid}>
        <Grid item>
          <Typography
            variant="h4"
            color="inherit"
            className={classes.speciesText}
          >
            {indSpecies.name}
          </Typography>
        </Grid>
        <Grid item className={classes.needPadding}>
          <Card className={classes.card}>
            <img src={`/${indSpecies.ImageUrl}`} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {indSpecies.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">{`$${
                indSpecies.currentPrice
              }`}</Typography>
              <Typography className={classes.text} component="p">
                {indSpecies.description}
              </Typography>
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>
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
