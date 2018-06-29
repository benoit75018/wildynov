import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import './logincss.css'
import TextField from 'material-ui/TextField'
import Logononclick from '../logo/Logononcliquable'
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
		console.log(this.state)
		this.setState({ [event.target.name]: event.target.value })
	}

	Submit = (event) => {
		const user = this.state
		// event.preventDefault()
		// console.log('uuuuuuuuuuuuuuuuuu', event)
		const verifyToken = localStorage.getItem('token')
		axios.post('http://localhost:8080/auth/login', user).then((response) => {
			localStorage.setItem('token', response.data.token)
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
				<RaisedButton type="button" onClick={this.Submit} label="Connexion" primary={true} style={style} />
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
