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
    const {animal} = props
    this.state = {
      animal,
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
      const count = prevState.count === 1 ? 1 : prevState.count - 1
      return {count}
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
              disabled={this.state.count === 1}
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
