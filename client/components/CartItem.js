import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'

const CartItem = props => {
  const {animal} = props
  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar src="/panda-face-icon.png" />
      </ListItemAvatar>
      <ListItemText primary={animal} />
    </ListItem>
  )
}

export default CartItem
