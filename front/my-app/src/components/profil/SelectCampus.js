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

class SelectsCampus extends React.Component {
	state = {
		campus: ''
	}

	handleChange = (campus) => (event) => {
		this.setState({ [campus]: event.target.value })
	}

	render() {
		const { classes } = this.props

		return (
			<div>
				<MuiThemeProvider>
					<FormControl className={classes.formControl}>
						<InputLabel htmlFor="campus-native-helper">Campus</InputLabel>
						<NativeSelect
							value={this.state.campus}
							onChange={this.handleChange('campus')}
							input={<Input name="campus" id="campus-native-helper" />}
						>
							<option value="" />
							<option value={10}>Aix-en-Provence</option>
							<option value={20}>Bordeaux</option>
							<option value={30}>Lyon</option>
							<option value={40}>Nantes</option>
							<option value={50}>Paris</option>
							<option value={60}>Toulouse</option>
						</NativeSelect>
					</FormControl>
				</MuiThemeProvider>
			</div>
		)
	}
}

SelectsCampus.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SelectsCampus)
