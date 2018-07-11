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
        console.log('nique ta mere')
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
					<Typography variant="title" gutterBottom>
						<br />
						<h5>{this.state.profile.name}</h5> 
					<h5>{this.state.profile.first_name}</h5>
                        <h5>{this.state.profile.campus}</h5>
					<h5>{this.state.profile.year}</h5> 
				    </Typography>
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
 