import React from 'react'
import PropTypes from 'prop-types'
import { TextField, Grid } from '@material-ui/core'
import { useFormContext, Controller } from 'react-hook-form'

const CustomTextField = ({ name, label, required, type }) => {
	const { control } = useFormContext()

	return (
		<Grid item xs={12} sm={6}>
			<Controller
				render={({ field }) => (
					<TextField
						{...field}
						label={label}
						type={type}
						required={required}
						fullWidth
					/>
				)}
				control={control}
				name={name}
			/>
		</Grid>
	)
}

CustomTextField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	required: PropTypes.bool.isRequired,
}

export default CustomTextField
