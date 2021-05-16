import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Container, Typography, Button, Grid } from '@material-ui/core'

import useStyles from './styles'
import CardItem from './cartItem/CartItem'

const Cart = ({
	cart,
	handleUpdateCartQty,
	handleRemoveFromCart,
	handleEmptyCart,
}) => {
	const classes = useStyles()

	const EmptyCart = () => (
		<Typography variant='subtitle1'>
			You have no items in your shopping cart,
			<Link to='/' className={classes.link}>
				start adding some!
			</Link>
		</Typography>
	)

	const FilledCart = () => (
		<Fragment>
			<Grid container spacing={3}>
				{cart.line_items.map(item => (
					<Grid item xs={12} sm={4} key={item.id}>
						<CardItem
							item={item}
							onUpdateCartQty={handleUpdateCartQty}
							onRemoveFromCart={handleRemoveFromCart}
						/>
					</Grid>
				))}
			</Grid>

			<div className={classes.details}>
				<Typography variant='h4'>
					Subtotal: {cart.subtotal.formatted_with_symbol}
				</Typography>
				<div>
					<Button
						className={classes.emptyBtn}
						size='large'
						type='button'
						variant='contained'
						color='secondary'
						onClick={handleEmptyCart}
					>
						Empty Cart
					</Button>
					<Button
						className={classes.checkoutBtn}
						component={Link}
						to='/checkout'
						size='large'
						type='button'
						variant='contained'
						color='primary'
					>
						Checkout
					</Button>
				</div>
			</div>
		</Fragment>
	)

	if (!cart.line_items) return 'Loading...'

	return (
		<Container>
			<div className={classes.toolbar} />
			<Typography className={classes.title} variant='h3' gutterBottom>
				Your Shopping Cart
			</Typography>

			{!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
		</Container>
	)
}

export default Cart
