import React from 'react'
import SelectsCampus from './SelectCampus'
import SelectsPromo from './SelectPromo'
import SelectSkills from './SelectSkills'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import './Profils.css'
import Button from '@material-ui/core/Button'
import TextField from 'material-ui/TextField'
import NavBar from '../AppBar'
import Logo from '../logo/Logo'
import axios from 'axios'
import { MySnackbarContentWrapper } from '../login/alert'
import Snackbar from '@material-ui/core/Snackbar'

import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import Input from '@material-ui/core/Input'

import { FormControlLabel } from '@material-ui/core'
import { navigate } from '@reach/router'

const theme = createMuiTheme({
	palette: {
		primary: { main: '#3f51b5' }
	}
})
/*components inside the profil form */

class Editprofil extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			first_name: '',
			campus: '',
			promo: '',
			skill: '',
			displaySnack: false,
			snack: { variant: 'warning', message: '' }
		}
	}
	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		this.setState({ displaySnack: false })
	}
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}
	handleSubmit = () => {
		const profil = this.state

		console.log('this.state: ', profil)
		axios
			.put('http://localhost:8080/user/editprofile', profil, {
				headers: {
					'x-access-token': localStorage.getItem('token')
				}
			})
			.then((response) => {
				const snack = {
					variant: 'success',
					message: 'Profil enregistré avec succés!'
				}

				return navigate('/profil'), this.setState({ snack, displaySnack: true })
			})
	}

	render() {
		const { classes } = this.props
		return (
			<div>
				<Logo />
				<NavBar />

				<MuiThemeProvider theme={theme}>
					<div className="form">
						<TextField hintText="nom" floatingLabelText="nom" name="name" onChange={this.handleChange} />
						<br />
						<TextField
							hintText="Prénom"
							floatingLabelText="Prénom"
							name="first_name"
							onChange={this.handleChange}
						/>

						<br />
						<FormControl className="formControl">
							<InputLabel htmlFor="campus-native-helper">Campus</InputLabel>
							<NativeSelect
								onChange={this.handleChange}
								name="campus"
								input={<Input name="campus" id="campus-native-helper" />}
							>
								{/* {console.log('this.state.campus :', this.state.campus)} */}
								<option value="" />
								<option value="Ingésup">Ingésup </option>
								) <option value="Ecole de Commerce">Ecole de Commerce</option>
							</NativeSelect>
						</FormControl>
						<br />
						<FormControl className="formControl">
							<InputLabel htmlFor="promo-native-helper">Promo</InputLabel>
							<NativeSelect
								onChange={this.handleChange}
								name="year"
								input={<Input name="year" id="promo-native-helper" />}
							>
								<option value="" />
								<option value="1ere Année">1ere Année</option>
								<option value="2ere Année">2eme Année</option>
								<option value="3ere Année">3e Année </option>
								<option value="4ere Année">4e Année</option>
								<option value="5ere Année">5e Année</option>
							</NativeSelect>
						</FormControl>
						<br />
						<FormControl className="formControl">
							<InputLabel htmlFor="skills-native-helper">Skills</InputLabel>
							<NativeSelect
								onChange={this.handleChange}
								name="skill"
								input={<Input name="skills" id="skills-native-helper" />}
							>
								<option value="" />
								<option value="HTML-CSS">HTML-CSS</option>
								<option value="React Js">React Js</option>
								<option value="Node">Node</option>
								<option value="Ui Designers">Ui Designers</option>
								<option value="Ux Designers">Ux Designers</option>
								<option value="Front-end">Front-end</option>
							</NativeSelect>
						</FormControl>
						<br />
						<div className="buttonprofile">
							<Button
								onClick={this.handleSubmit}
								className="buttonprofile"
								variant="raised"
								color="primary"
							>
								Enregistrer
							</Button>
						</div>
					</div>
					<Snackbar
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right'
						}}
						open={this.state.displaySnack}
						autoHideDuration={3}
					>
						<MySnackbarContentWrapper {...this.state.snack} onClose={this.handleClose} />
					</Snackbar>
				</MuiThemeProvider>
			</div>
		)
	}
}
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
const style = {
	margin: 15
}

export default Editprofil
