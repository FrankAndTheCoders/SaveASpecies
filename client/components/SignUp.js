import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createUser} from '../store'
import {
  InputLabel,
  Input,
  FormGroup,
  Button,
  Typography,
  Grid,
  TextField
} from '@material-ui/core'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      userFound: false,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {}

  handleSubmit(e) {
    e.preventDefault()
    this.props.createUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    })
    this.props.history.push('/')
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
        />

        <Grid
          container
          spacing={40}
          direction="column"
          alignItems="center"
          justify="center"
          style={{minHeight: '90vh'}}
        >
          <Typography variant="h2">Sign Up</Typography>
          <br />
          <FormGroup>
            <TextField
              label="first name"
              name="firstName"
              type="text"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <TextField
              label="last name"
              name="lastName"
              type="text"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
            <TextField
              label="email"
              name="email"
              type="text"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <TextField
              label="password"
              name="password"
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <TextField
              label="confirm password"
              name="confirmPassword"
              type="password"
              onChange={this.handleChange}
              value={this.state.confirmPassword}
            />
            <Button color="secondary" onClick={this.handleSubmit}>
              Sign Up
            </Button>
            <Button color="secondary" href="/auth/google">
              Sign Up With Google
            </Button>
          </FormGroup>
        </Grid>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   createUser: (user) => dispatch(createUser(user))
// })

export default connect(null, null)(SignUp)
