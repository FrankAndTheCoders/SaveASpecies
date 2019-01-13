import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import ToolTip from '@material-ui/core/Tooltip'

export default function CartItem(props) {
  const {animal} = props
  let count = 3

  return (
    <ListItem button>
      {/* <ListItemAvatar>
        <Avatar src="/panda-face-icon.png" />
      </ListItemAvatar> */}
      <ListItemText primary={animal} />
      <Divider />
      <div>
        <ToolTip title="Less" aria-label="Less">
          <Button variant="contained" color="secondary" size="small">
            -
          </Button>
        </ToolTip>
        <div className="quantity">{count}</div>
        <ToolTip title="More" aria-label="More">
          <Button variant="contained" color="secondary" size="small">
            +
          </Button>
        </ToolTip>
      </div>
    </ListItem>
  )
}
