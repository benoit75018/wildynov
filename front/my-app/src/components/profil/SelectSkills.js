import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import Input from '@material-ui/core/Input'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
/*components inside the profil form*/

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

class SelectSkills extends React.Component {
	state = {
		skills: ''
	}

	handleChange = (skills) => (event) => {
		this.setState({ [skills]: event.target.value })
	}

	render() {
		const { classes } = this.props

		return (
			<div>
				<MuiThemeProvider>
					<FormControl className={classes.formControl}>
						<InputLabel htmlFor="skills-native-helper">Skills</InputLabel>
						<NativeSelect
							value={this.state.skills}
							onChange={this.handleChange('skills')}
							input={<Input name="skills" id="skills-native-helper" />}
						>
							<option value="" />
							<option value={10}>HTML-CSS</option>
							<option value={20}>React Js</option>
							<option value={30}>Node</option>
							<option value={40}>Ui Designers</option>
							<option value={50}>Ux Designers</option>
							<option value={60}>Front-end</option>
						</NativeSelect>
					</FormControl>
				</MuiThemeProvider>
			</div>
		)
	}
}

SelectSkills.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SelectSkills)
