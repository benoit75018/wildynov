<<<<<<< HEAD
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Logo from '../logo/Logo'
import axios from 'axios'

class Signup extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: ''
		}
	}
	handleChange = (event) => {
		console.log(event)
		this.setState({ email: event.target.email })
	}

	handleSubmit = (event) => {
		this.state = {
			email: ''
		}
		console.log('An email has been sent with an automatic password' + this.state.email)
		event.preventDefault()
		console.log(this.state['email'])
		axios
			.post('http://localhost:8080/auth/signup', {
				email: event.target.email.value
			})
			.then(function(response) {
				if (!response.ok) {
					return 'An email has been sent with an automatic password'
				}
				throw Error(response.statusText)
			})
			.then(function(response) {
				console.log(response)
			})
			.catch(function(error) {
				console.log(error)
			})
	}

	render() {
		return (
			<div>
				<Logo />
				<form onSubmit={this.handleSubmit}>
					<TextField
						// email={this.state.email}
						onChange={this.handleChange}
						hintText="@enov"
						floatingLabelText="email"
						name="email"
						variant="raised"
						color="primary"
					/>
					<br />
					<RaisedButton type="submit" label="Connexion" primary={true} style={style} />
				</form>
			</div>
		)
	}
}
const style = {
	margin: 15
}
export default Signup
=======
import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Logo from '../logo/Logo'

class FirstConnexion extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: ''
		}
	}
	render() {
		return (
			<div>
				<Logo />
				<div class="register">
					<MuiThemeProvider>
						<TextField hintText="@enov" type="email" floatingLabelText="Email" />

						<br />
						<RaisedButton label="Send" primary={true} />
					</MuiThemeProvider>
				</div>
			</div>
		)
	}
}

export default FirstConnexion
>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a
