import React from 'react'
<<<<<<< HEAD

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
					throw Error(response.statusText)
				}
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

					<RaisedButton type="submit" label="Connexion" primary={true} style={style} />
					<Link to="/signup">
						<RaisedButton label="Première connexion" primary={true} to="/signup" />
					</Link>
				</form>
			</div>
		)
	}
}

=======
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import FirstConnexion from './FirstConnexion'
import './Login.css'
import TextField from 'material-ui/TextField'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Logo from '../logo/Logo'

class ModalSwitch extends React.Component {
	render() {
		return (
			/*CREATE ROUTES*/
			<div>
				<Switch>
					<Route exact path="/Login" component={Home} />
					<Route path="/Login/1" component={Signin} />
				</Switch>
			</div>
		)
	}
}
/*CALL COMPONENT*/

const routes = [ { id: 1, title: <FirstConnexion /> } ]

/*FRONT OF THIS PAGE*/
export const Home = () => (
	<div>
		<Logo />

		<div className="input">
			<MuiThemeProvider>
				<TextField
					hintText="@enov"
					floatingLabelText="Email"
					LabelText="Email"
					variant="raised"
					color="primary"
				/>

				<br />

				<TextField type="password" hintText="Enter your Password" floatingLabelText="Password" />

				<br />
				<RaisedButton label="Connexion" primary={true} style={style} />
				<RaisedButton label="Première connexion" primary={true} linkButton={true} href="/Login/1" />
			</MuiThemeProvider>
		</div>
	</div>
)
/*CALL THE NEW ROUTE*/
export const Signin = () => (
	<div>
		{routes.map((i) => (
			<Link
				key={i.id}
				to={{
					pathname: `/Login/${i.id}`
					// this is the trick!
				}}
			>
				<p>{i.title}</p>
			</Link>
		))}
	</div>
)

;({ match }) => {
	const route = routes[parseInt(match.params.id, 10)]

	return (
		<div>
			<h1>{route.title}</h1>
		</div>
	)
}
/*/EXPORT THIS FILE */
export const Login = () => (
	<Router>
		<Route component={ModalSwitch} />
	</Router>
)

>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a
const style = {
	margin: 15
}
export default Login
