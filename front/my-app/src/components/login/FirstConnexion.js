import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Logononclick from '../logo/Logononcliquable'
import axios from 'axios'
import { MySnackbarContentWrapper } from './alert'
import Snackbar from '@material-ui/core/Snackbar'
import { Link } from '@reach/router'
class Signup extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			displaySnack: false,
			snack: { variant: 'warning', message: '' }
		}
	}
	handleClose = (reason) => {
		if (reason === 'clickaway') {
			return
		}

		this.setState({ displaySnack: false })
	}
	handleChange = (event) => {
		console.log(event)
		this.setState({ email: event.target.email })
	}

	handleSubmit = (event) => {
		this.state = {
			email: ''
		}

		// console.log('An email has been sent with an automatic password' + this.state.email)
		event.preventDefault()

		console.log(this.state['email'])
		axios
			.post('http://localhost:8080/auth/signup', {
				email: event.target.email.value
			})
			.then((response) => {
				if (new Error()) {
					console.log(response)
					const snack = {
						variant: 'success',
						message: 'Un email vous a été adressé avec un mot de passe !'
					}

					return this.setState({ snack, displaySnack: true }), window.location.reload('http://localhost:3000')
				}
			})
			.catch((err) => {
				if (err.message) {
					const snack = {
						variant: 'warning',
						message: 'Email déjà enregistré!'
					}

					return (
						this.setState({ snack, displaySnack: true }),
						window.location.reload('http://localhost:3000/signup')
					)
				}
			})
		if (422) {
			const snack = {
				variant: 'error',
				message: 'Email non valide!'
			}

			return this.setState({ snack, displaySnack: true })
		}
	}

	render() {
		return (
			<div>
				<Logononclick />
				<form onSubmit={this.handleSubmit} className="form">
					<TextField
						// email={this.state.email}
						onChange={this.handleChange}
						hintText="@ynov"
						floatingLabelText="email"
						name="email"
						variant="raised"
						color="primary"
					/>
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

					<br />
					<RaisedButton type="submit" label="Connexion" primary={true} style={style} />
				</form>
				<Link to="../">
					<p>Vous avez déjà un compte ? </p>
				</Link>
			</div>
		)
	}
}
const style = {
	margin: 15
}
export default Signup
