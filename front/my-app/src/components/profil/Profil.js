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
			.get('http://localhost:8080/user/profile')
			.then((response) => {
				console.log('--response--', response.data)
				this.setState({ profile: response.data })
				console.log('this.state.profile ', this.state.profile.name)
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
				<NavBar />

				<div>
					<Link to="/editprofil">
						<Button variant="contained" color="secondary">
							Modifier mon profil
						</Button>
					</Link>
					<div>
						<Typography variant="title" gutterBottom>
							<br />

							<h5>Nom:{this.state.profile.name}</h5>
							<h5>Prenom:{this.state.profile.first_name}</h5>
							<h5>Campus:{this.state.profile.campus}</h5>
							<h5>Promo:{this.state.profile.year}</h5>
						</Typography>
					</div>
				</div>
			</div>
		)
	}
}

export default DetailProfile
