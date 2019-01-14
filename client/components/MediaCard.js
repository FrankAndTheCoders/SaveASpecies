import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Fab from '@material-ui/core/Fab'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import TextField from '@material-ui/core/TextField'
import ToolTip from '@material-ui/core/Tooltip'

const styles = theme => ({
  card: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
})

// function MediaControlCard(props) {
class MediaControlCard extends React.Component {
  // const {classes, theme, animal} = props
  constructor(props) {
    super(props)
    this.state = {
      classes: props.classes,
      theme: props.them,
      animal: props.animal
    }
  }

  render() {
    return (
      <Card className={this.state.classes.card}>
        <div className={this.state.classes.details}>
          <CardContent className={this.state.classes.content}>
            <Typography component="h5" variant="h5">
              {this.state.animal}
            </Typography>
          </CardContent>
          <div className={this.state.classes.controls}>
            <ToolTip title="Less" aria-label="Less!">
              <Fab color="primary" size="small">
                -
              </Fab>
            </ToolTip>
            <div width="10">{1}</div>
            <ToolTip title="More" aria-label="More!">
              <Fab color="primary" size="small">
                +
              </Fab>
            </ToolTip>
          </div>
        </div>
        <CardMedia
          className={this.state.classes.cover}
          image="/panda-face-icon.png"
          title={this.state.animal}
        />
      </Card>
    )
  }
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, {withTheme: true})(MediaControlCard)
