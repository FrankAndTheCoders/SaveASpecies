import React, {Component} from 'react'
import {connect} from 'react-redux'
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
  }

  componentDidMount() {}

  handleSubmit(e) {
    e.preventDefault()
    this.props.auth({
      email: this.state.email,
      password: this.state.password,
      method: 'login'
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
              type="text"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <Button onClick={this.handleSubmit}>Log In</Button>
          </FormGroup>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
  auth: user => dispatch(auth(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
