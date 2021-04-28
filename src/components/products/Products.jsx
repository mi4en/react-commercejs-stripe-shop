import React from 'react';
import Grid from '@material-ui/core';

const products = [
	{
		id: 1,
		name: 'IPhone 10',
		description: 'nice phone from apple',
		proce: '$123',
	},
	{
		id: 2,
		name: 'One Plus 10N',
		description: 'nice phone from overall',
		proce: '$122',
	},
	{
		id: 3,
		name: 'Samsung Galaxy 23',
		description: 'nice phone from yeah',
		proce: '$155',
	},
];

const Products = () => {
	return (
		<main>
			<Grid container justify='center' spacing={4}>
				{products.map(product => (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

export default Products;
