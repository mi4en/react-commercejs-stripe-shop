import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import ProductItem from './ProductItem/ProductItem'
import useStyles from './styles'

const Products = ({ products }) => {
	const classes = useStyles()

	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Grid container justify='center' spacing={4}>
				{products.map(product => (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
						<ProductItem product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	)
}

Products.propTytpes = {
	products: PropTypes.array.isRequired,
}

export default Products
