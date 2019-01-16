import React from 'react'
import {Link} from 'react-router-dom'
import {Grid} from '@material-ui/core'

const HomePage = () => {
  return (
    <Grid container justify="center">
      <Grid item>
        <h1>Welcome to Save A Species!</h1>
        <Link to="/species">
          <img className="homepageImage" src="Homepage.jpg" />
        </Link>
      </Grid>
    </Grid>
  )
}

export default HomePage
