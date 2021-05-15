import React from 'react'
import PropTypes from 'prop-types'
import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	IconButton,
} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles'

const ProductItem = ({ product: { name, description, price, image } }) => {
	const classes = useStyles()

	return (
		<Card className={classes.root}>
			<CardMedia className={classes.media} image={image} title={name} />
			<CardContent>
				<div className={classes.cardContent}>
					<Typography variant='h5' gutterBottom>
						{name}
					</Typography>
					<Typography variant='h5'>{price}</Typography>
				</div>
				<Typography variant='body2' color='textSecondary'>
					{description}
				</Typography>
			</CardContent>

			<CardActions disableSpacing className={classes.actions}>
				<IconButton aria-label='Add to Cart'>
					<AddShoppingCart />
				</IconButton>
			</CardActions>
		</Card>
	)
}

ProductItem.propTypes = {
	product: PropTypes.object.isRequired,
}

export default ProductItem
