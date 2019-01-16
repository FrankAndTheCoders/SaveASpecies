import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {auth} from '../store/user'
import {
  InputLabel,
  Input,
  FormGroup,
  Button,
  Typography,
  Grid,
  TextField
} from '@material-ui/core'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      userFound: false,
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this)
  }

  componentDidMount() {}

  handleSubmit(e) {
    e.preventDefault()
    this.props.auth(this.state.email, this.state.password, 'login')
  }

  handleSubmitSignUp() {
    this.props.history.push('/signup')
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
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{minHeight: '100vh'}}
        >
          <Typography variant="h2">Login</Typography>
          <br />
          <FormGroup>
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
            <p />
            <div className="loginButtons">
              <Button
                onClick={this.handleSubmit}
                variant="contained"
                color="primary"
              >
                Log In
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button color="primary" variant="contained" href="/auth/google">
                Login With Google
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                onClick={this.handleSubmitSignUp}
                variant="contained"
                color="secondary"
              >
                Sign Up
              </Button>
            </div>
          </FormGroup>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  auth: (email, password, method) => dispatch(auth(email, password, method))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
