import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import './logincss.css'
import TextField from 'material-ui/TextField'
import Logononclick from '../logo/Logononcliquable'
import { Link } from '@reach/router'
import axios from 'axios'
import { Route, Redirect } from 'react-router'
import Home from '../../Home'
class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: ''
		}
	}
	handleChange = (event) => {
		console.log(this.state)
		this.setState({ [event.target.name]: event.target.value })
	}

	Submit = (event) => {
		const user = this.state
		const connexion = <Redirect to="/home" />

		axios.post('http://localhost:8080/auth/login', user, connexion).then((response) => {
			const token = response.headers['x-access-token']
			console.log(response, token)
			localStorage.setItem('token', token)
		})
	}

	render() {
		return (
			<div className="body">
				<Logononclick />

				<TextField
					onChange={this.handleChange}
					floatingLabelText="Email"
					name="email"
					variant="raised"
					color="primary"
				/>

				<br />

				<TextField
					onChange={this.handleChange}
					type="password"
					name="password"
					hintText="Enter your Password"
					floatingLabelText="Password"
				/>
				<br />
				<Link to="/home">
				<RaisedButton type="button" onClick={this.Submit} label="Connexion" primary={true} style={style} />
</Link>
				<Link to="/signup">
					<RaisedButton label="Première connexion" primary={true} to="/signup" />
				</Link>
				
			</div>
		)
	}
}

const style = {
	margin: 15
}
export default Login
