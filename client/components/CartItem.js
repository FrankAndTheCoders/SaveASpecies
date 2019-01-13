import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import ToolTip from '@material-ui/core/Tooltip'

class CartItem extends React.Component {
  constructor(props) {
    super(props)
    const {animal, index, remove} = props
    this.state = {
      index,
      animal,
      remove,
      count: 1
    }

    this.increaseQuantity = this.increaseQuantity.bind(this)
    this.decreaseQuantity = this.decreaseQuantity.bind(this)
  }

  increaseQuantity() {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  decreaseQuantity() {
    this.setState(prevState => {
      if (prevState.count === 1) {
        prevState.remove(prevState.index)
        return
      }

      return {count: prevState.count - 1}
    })
  }

  render() {
    return (
      <ListItem button>
        <ListItemAvatar>
          <Avatar src="/panda-face-icon.png" />
        </ListItemAvatar>
        <ListItemText primary={this.state.animal} />
        <Divider />
        <div>
          <ToolTip title="Less" aria-label="Less">
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={this.decreaseQuantity}
            >
              -
            </Button>
          </ToolTip>
          <div className="quantity">{this.state.count}</div>
          <ToolTip title="More" aria-label="More">
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={this.increaseQuantity}
            >
              +
            </Button>
          </ToolTip>
        </div>
      </ListItem>
    )
  }
}

export default CartItem
