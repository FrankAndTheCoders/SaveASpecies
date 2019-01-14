import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Fab from '@material-ui/core/Fab'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import ToolTip from '@material-ui/core/Tooltip'

const CartItem = props => {
  const {animal} = props
  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar src="/panda-face-icon.png" />
      </ListItemAvatar>
      <ListItemText primary={animal} />
      <Divider />
      <div>
        <ToolTip title="Less" aria-label="Less!">
          <Fab color="inherit" size="small">
            -
          </Fab>
        </ToolTip>
        <ToolTip title="More" aria-label="More!">
          <Fab color="inherit" size="small">
            +
          </Fab>
        </ToolTip>
      </div>
    </ListItem>
  )
}

export default CartItem
