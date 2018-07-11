import Button from '@material-ui/core/Button'
import { Link } from '@reach/router'
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import NavBar from '../AppBar'
import Logo from '../logo/Logo'
import axios from 'axios'
import './profilcss.css'

class DetailProfile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			profile: []
		}
	}

	componentDidMount() {
		console.log('bonsoir')
		axios
			.get('http://localhost:8080/user/profile', {
				headers: {
					'x-access-token': localStorage.getItem('token')
				}
			})
			.then((response) => {
				console.log('--response--', response.data)
				this.setState({ profile: response.data })
				console.log('this.state.profile ', this.state.profile.last_name)
			})
			.catch((err) => {
				{
					console.log('caught it!', err)
				}
			})
	}

	render() {
		return (
			<div>
				<Logo />
				<p className="bonjour">Bonjour {this.state.profile.first_name} </p>
				<NavBar />

				<div>
					<Typography variant="title" gutterBottom>
						<br />

						<h2>Nom: {this.state.profile.name}</h2>
						<h2>Prenom: {this.state.profile.first_name}</h2>
						<h2>Campus: {this.state.profile.campus}</h2>
						<h2>Promo: {this.state.profile.year} </h2>
						<h2>Compétences: {this.state.profile.skill}</h2>
					</Typography>
				</div>
				<div>
					<Link to="/editprofil">
						<Button variant="contained" color="secondary">
							Modifier mon profil
						</Button>
					</Link>
					<div />
				</div>
			</div>
		)
	}
}

export default DetailProfile
