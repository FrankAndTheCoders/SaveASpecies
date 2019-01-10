import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'

// material ui
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import {green, orange} from '@material-ui/core/colors'

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: orange
  },
  typography: {
    useNextVariants: true
  }
})

// establishes socket connection
import './socket'

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
)
