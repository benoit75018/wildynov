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
					alert('Message successfully sent')
				}
				throw Error(response.statusText)
			})
			.then(function(response) {
				console.log(response)
			})
			.catch(function(error) {
				console.log(error)
				alert('Email non valide')
			})
	}

	render() {
		return (
			<div>
				<Logo />
				<form onSubmit={this.handleSubmit}>
					<TextField
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
