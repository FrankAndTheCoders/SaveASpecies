import React, {Component} from 'react'
import {connect} from 'react-redux'
import {me} from '../store/user'
import {getOrderHistory} from '../store/orderHistory'
import PropTypes from 'prop-types'
import {
  withStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Typography
} from '@material-ui/core'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
})

class UserHome extends Component {
  componentDidMount() {
    this.props.getMe()
    this.props.getOrderHistory(this.props.id)
  }
  render() {
    const {firstName, email, orderHistory, classes} = this.props
    return (
      <Grid container alignItems="center" direction="column">
        <Grid item>
          <Typography variant="h4">Welcome {firstName}!</Typography>
          <Typography variant="h5">Email: {email}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">Order History:</Typography>
          <Paper className={classes.root}>
            {orderHistory.map(order => (
              <Table className={classes.table} key={order.id}>
                <TableHead>
                  <TableRow>
                    <CustomTableCell align="right">
                      Order # {order.id}
                    </CustomTableCell>
                    <CustomTableCell align="right">Species</CustomTableCell>
                    <CustomTableCell align="right">Qty.</CustomTableCell>
                    <CustomTableCell align="right">Subtotal</CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.orderLines.map(orderLine => (
                    <TableRow key={orderLine.id}>
                      <TableCell align="right" />
                      <TableCell align="right">
                        {orderLine.species.name}
                      </TableCell>
                      <TableCell align="right">{orderLine.quantity}</TableCell>
                      <TableCell align="right">
                        {`$${orderLine.subTotal / 100}`}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={2}>Total</TableCell>
                    <TableCell align="right">{`$${order.totalAmount /
                      100}`}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Purchase Date</TableCell>
                    <TableCell align="right">
                      {order.purchaseDate.split('T')[0]}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            ))}
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

UserHome.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapState = state => ({
  id: state.user.id,
  firstName: state.user.firstName,
  email: state.user.email,
  orderHistory: state.orderHistory.orderHistory
})

const mapDispatch = dispatch => ({
  getMe: () => dispatch(me()),
  getOrderHistory: userId => dispatch(getOrderHistory(userId))
})

export default withStyles(styles)(connect(mapState, mapDispatch)(UserHome))
