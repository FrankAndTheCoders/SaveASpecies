import React from 'react'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'

export default function CartIcon(props) {
  return this.props.location.pathname === '/checkout' ? null : (
    <IconButton
      color="inherit"
      aria-label="Open drawer"
      onClick={this.handleDrawerOpen}
      className={classNames(classes.menuButton, open && classes.hide)}
    >
      <Badge
        badgeContent={cart.length}
        color="error"
        classes={{badge: classes.badge}}
        invisible={cart.length === 0}
      >
        <ShoppingCart />
      </Badge>
    </IconButton>
  )
}
