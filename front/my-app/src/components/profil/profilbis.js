import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// import TextField from 'material-ui/TextField';
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'

import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import Paper from '@material-ui/core/Paper'
import NavBar from '../AppBar'
import Logo from '../logo/Logo'
import axios from 'axios'

class DetailProfile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			profile: []
		}
	}

	componentDidMount() {
		axios
			.get('http://localhost:8080/user/profile')
			.then((response) => {
				console.log('--response--', response.data.results)
				this.setState({ profile: response.data.results })
				console.log('this.state.profile ', this.state.profile.name)
			})
			.catch((err) => {
				{
					console.log('caught it!', err)
				}
			})
	}
	render() {
		const infoPro1 = this.state.profile.map((e) => e.profile.name)
		// const infoPro2 = this.state.profile.map((e) => e.first_name)
		// const infoPro3 = this.state.profile.map((e) => e.year)
		// const infoPro4 = this.state.profile.map((e) => e.campus)
		console.log(infoPro1)
		return (
			<div>
				<Logo />
				<NavBar />
				<div>
					{/* <Typography variant="title" gutterBottom>
						<br />
						<h5>{infoPro1}</h5> */}
					{/* <h5>{infoPro2}</h5>
						<h5>{infoPro3}</h5>
					<h5>{infoPro4}</h5> */}
					{/* </Typography> */}
				</div>
			</div>
		)
	}
}

export default DetailProfile

// 	const profileTest = [
// 		{
// 			id: 1,
// 			name: 'Jérot',
// 			first_name: 'Blandis',
// 			year: '02.02.2018',
// 			campus: 'Paris'
// 		}
// 	]
// 	this.setState({ profile: profileTest })
// }
