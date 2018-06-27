import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import './logincss.css'
import TextField from 'material-ui/TextField'
import Logo from '../logo/Logo'
import { Link } from '@reach/router'
import axios from 'axios'
class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: ''
		}
	}
	handleChange = (event) => {
		console.log(event)
		this.setState({ email: event.target.email, password: event.target.password })
	}

	handleSubmit = (event) => {
		this.state = {
			email: '',
			password: ''
		}
		console.log('You are connected' + this.state.email)
		event.preventDefault()
		console.log(this.state['email'])
		axios
			.post('http://localhost:8080/auth/login')
			.then(function(response) {
				if (!response.ok) {
					// alert('connesuccessfully sent')
					throw Error(response.statusText)
				}
			})
			.then(function(response) {
				console.log(response)
			})
			.catch(function(error) {
				console.log(error)
				alert('error connection')
			})
	}
	render() {
		return (
			<div className="body">
				<Logo />
				<form onSubmit={this.handleSubmit}>
					<TextField
						onChange={this.handleChange}
						hintText="@enov"
						floatingLabelText="Email"
						variant="raised"
						color="primary"
					/>

					<br />

					<TextField
						onChange={this.handleChange}
						type="password"
						hintText="Enter your Password"
						floatingLabelText="Password"
					/>
					<br />
					<RaisedButton type="submit" label="Connexion" primary={true} style={style} />
					<Link to="/signup">
						<RaisedButton label="Première connexion" primary={true} to="/signup" />
					</Link>
				</form>
			</div>
		)
	}
}

const style = {
	margin: 15
}
export default Login
