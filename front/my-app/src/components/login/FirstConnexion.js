import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Logononclick from '../logo/Logononcliquable'
import axios from 'axios'
import CustomizedSnackbars from './alert'
class Signup extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			message: <CustomizedSnackbars />
		}
	}
	handleChange = (event) => {
		console.log(event)
		this.setState({ email: event.target.email })
	}

	handleSubmit = (event) => {
		this.state = {
			email: '',
			open: <CustomizedSnackbars />
		}
		console.log('An email has been sent with an automatic password' + this.state.email)
		event.preventDefault()
		const open = <CustomizedSnackbars />
		console.log(this.state['email'])
		axios
			.post('http://localhost:8080/auth/signup', {
				email: event.target.email.value
			})
			.then(function(response) {
				if (!response.ok) {
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
				<Logononclick />
				<form onSubmit={this.handleSubmit}>
					<TextField
						// email={this.state.email}
						onChange={this.handleChange}
						hintText="@ynov"
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
