import React from 'react'
import { Grid } from '@material-ui/core'

import ProductItem from './ProductItem/ProductItem'
import useStyles from './styles'

const products = [
	{
		id: 1,
		name: 'IPhone 10',
		description: 'nice phone from apple',
		price: '$1200',
		image:
			'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
	},
	{
		id: 2,
		name: 'One Plus 10N',
		description: 'nice phone from overall',
		price: '$600',
		image:
			'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
	},
	{
		id: 3,
		name: 'Samsung Galaxy 23',
		description: 'nice phone from yeah',
		price: '$950',
		image:
			'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
	},
]

const Products = () => {
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

export default Products
