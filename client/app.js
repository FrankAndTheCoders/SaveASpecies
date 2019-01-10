import React from 'react'
import {Navbar, AllSpecies} from './components'
import Routes from './routes'
import {Router} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
