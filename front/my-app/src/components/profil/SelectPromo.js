import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import Input from '@material-ui/core/Input'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

/*components inside the profil form */

const styles = (theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 260
	},
	selectEmpty: {
		marginTop: theme.spacing.unit * 2
	}
})

class SelectsPromo extends React.Component {
	state = {
		promo: ''
	}

	handleChange = (promo) => (event) => {
		this.setState({ [promo]: event.target.value })
	}

	render() {
		const { classes } = this.props

		return (
			<div>
				<MuiThemeProvider>
					<FormControl className={classes.formControl}>
						<InputLabel htmlFor="promo-native-helper">Promo</InputLabel>
						<NativeSelect
							value={this.state.promo}
							onChange={this.handleChange('promo')}
							input={<Input name="promo" id="promo-native-helper" />}
						>
							<option value="" />
							<option value={10}>Aix-en-Provence</option>
							<option value={20}>Bordeaux</option>
							<option value={30}>Lyon</option>
							<option value={30}>Nantes</option>
							<option value={30}>Paris</option>
							<option value={30}>Toulouse</option>
						</NativeSelect>
					</FormControl>
				</MuiThemeProvider>
			</div>
		)
	}
}

SelectsPromo.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SelectsPromo)
