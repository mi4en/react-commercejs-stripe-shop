import React, { Fragment } from 'react'
import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	MenuItem,
	Menu,
	Typography,
} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import logo from '../../assets/logo.png'
import useStyles from './styles'

const Navbar = () => {
	const classes = useStyles()

	return (
		<Fragment>
			<AppBar position='fixed' className={classes.appBar} color='inherit'>
				<Toolbar>
					<Typography variant='h6' className={classes.title} color='inherit'>
						<img
							src={logo}
							alt='React WebShop'
							height='25px'
							className={classes.image}
						/>
						React WebShop
					</Typography>

					<div className={classes.grow} />

					<div className={classes.button}>
						<IconButton aria-label='Show cart items' color='inherit'>
							<Badge badgeContent={2} color='secondary'>
								<ShoppingCart />
							</Badge>
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</Fragment>
	)
}

export default Navbar