import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import ToolTip from '@material-ui/core/Tooltip'

// function updateLocalStorage(animal, count) {
//   console.log(JSON.parse(window.localStorage.getItem('cart')))
//     let updatedCart = JSON.parse(window.localStorage.getItem('cart')).cart.map(cartAnimal => {
//       console.log('mapping')
//       if (animal === cartAnimal) {
//         animal.quantity = count
//       }
//       return cartAnimal
//     })
//     window.localStorage.setItem('cart', JSON.stringify(updatedCart));
//     console.log(window.localStorage.getItem('cart'))
// }

class CartItem extends React.Component {
  constructor(props) {
    super(props)
    // const {animal, index, remove} = props
    this.state = {
      count: 1
    }

    this.increaseQuantity = this.increaseQuantity.bind(this)
    this.decreaseQuantity = this.decreaseQuantity.bind(this)
    this.updateLocalStorage = this.updateLocalStorage.bind(this)
  }

  increaseQuantity() {
    this.props.animal.quantity++
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })

    this.updateLocalStorage(this.props.animal, this.props.animal.quantity)
  }

  updateLocalStorage(animal, count) {
    let updatedCart = JSON.parse(window.localStorage.getItem('cart')).cart.map(
      cartAnimal => {
        if (animal.id === cartAnimal.id) {
          cartAnimal.quantity = count
        }
        return cartAnimal
      }
    )
    window.localStorage.setItem('cart', JSON.stringify({cart: updatedCart}))
  }

  decreaseQuantity() {
    this.props.animal.quantity--
    this.setState(prevState => {
      if (prevState.count === 1) {
        this.props.remove(this.props.animal)
        return
      }

      return {count: prevState.count - 1}
    })
  }

  componentDidUpdate() {}

  render() {
    const {animal} = this.props
    return (
      <ListItem button>
        <ListItemAvatar>
          <Avatar src="/panda-face-icon.png" />
        </ListItemAvatar>
        <ListItemText primary={animal.name} />
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
          <div className="quantity">{animal.quantity}</div>
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
