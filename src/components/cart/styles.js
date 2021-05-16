import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
	toolbar: theme.mixins.toolbar,
	title: {
		marginTop: '5%',
	},
	emptyBtn: {
		minWidth: '150px',
		[theme.breakpoints.down('xs')]: {
			marginBottom: '5px',
		},
		[theme.breakpoints.up('xs')]: {
			marginRight: '20px',
		},
	},
	checkoutBtn: {
		minWidth: '150px',
	},
	link: {
		textDecoration: 'none',
		color: 'green',
	},
	details: {
		display: 'flex',
		marginTop: '10%',
		width: '100%',
		justifyContent: 'space-between',
	},
}))
