import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
	InputLabel,
	Select,
	MenuItem,
	Button,
	Grid,
	Typography,
} from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'

import { commerce } from '../../lib/commerce'
import CustomTextField from './CustomTextField'

const AddressForm = ({ checkoutToken }) => {
	const [shippingCountries, setShippingCountries] = useState([])
	const [shippingCountry, setShippingCountry] = useState('')
	const [shippingSubdivisions, setShippingSubdivisions] = useState([])
	const [shippingSubdivision, setShippingSubdivision] = useState('')
	const [shippingOptions, setShippingOptions] = useState([])
	const [shippingOption, setShippingOption] = useState('')

	const methods = useForm()

	const countries = Object.entries(shippingCountries).map(([code, name]) => ({
		id: code,
		label: name,
	}))

	const fetchShippingCountries = async checkoutTokenId => {
		const { countries } = await commerce.services.localeListShippingCountries(
			checkoutTokenId,
		)

		setShippingCountries(countries)
		setShippingCountry(Object.keys(countries)[0])
	}

	useEffect(() => {
		fetchShippingCountries(checkoutToken.id)
	}, [])

	return (
		<Fragment>
			<Typography variant='h6' gutterBottom>
				Shipping Address
			</Typography>
			<FormProvider {...methods}>
				<form onSubmit={() => console.log('Submit')}>
					<Grid container spacing={3}>
						<CustomTextField
							required={true}
							name='firstName'
							label='First Name'
							type='text'
						/>
						<CustomTextField
							required={true}
							name='lastName'
							label='Last Name'
							type='text'
						/>
						<CustomTextField
							required={true}
							name='address1'
							label='Address'
							type='text'
						/>
						<CustomTextField
							required={true}
							name='email'
							label='Email'
							type='email'
						/>
						<CustomTextField
							required={true}
							name='city'
							label='City'
							type='text'
						/>
						<CustomTextField
							required={true}
							name='zipcode'
							label='ZIP / Postal Code'
							type='number'
						/>

						<Grid item xs={12} sm={6}>
							<InputLabel>Shipping Country</InputLabel>
							<Select
								value={shippingCountry}
								fullWidth
								onChange={e => setShippingCountry(e.target.value)}
							>
								{countries.map(country => (
									<MenuItem key={country.id} value={country.id}>
										{country.label}
									</MenuItem>
								))}
							</Select>
						</Grid>

						{/* <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid> */}
					</Grid>
				</form>
			</FormProvider>
		</Fragment>
	)
}

AddressForm.propTypes = {}

export default AddressForm
