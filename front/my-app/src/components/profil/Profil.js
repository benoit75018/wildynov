import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

import NavBar from '../AppBar'
import Logo from '../logo/Logo'
import { Link } from '@reach/router'

// Material-UI //
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import axios from 'axios'

// // Importations locales //
// import Block from './Block'

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#6effff',
			main: '#3f50b5',
			dark: '#00b2cc',
			contrastText: '#fff'
		}
	}
})

class Profile extends Component {
	constructor(props) {
		super(props)

		this.state = {
			user: []
		}
	}

	componentDidMount() {
		axios
			.get('http://localhost:8080/user/profile')
			.then((response) => {
				console.log('--response--', response.data.results)
				this.setState({ user: response.data.results })
				console.log('this.state.user ', this.state.user)
			})
			.catch((err) => {
				console.log('caught it!', err)
			})
	}

	render() {
		const { classes } = this.props
		return (
			<div>
				<logo />
				<navbar />

				<div className="size1">
					{/* <div className={classes.root}>
						<MuiThemeProvider theme={theme}>
							<Grid container>
								{this.state.user.map((profile) => {
									{
										console.log('it works!')
									}

									return (
										<Grid item xs={12} md={6} lg={3}>
											<div
												name={profile.name}
												first_name={profile.first_name}
												campus={profile.campus}
												year={profile.year}
											/>
										</Grid>
									)
								})}
							</Grid>
						</MuiThemeProvider>
					</div> */}
				</div>
			</div>
		)
	}
}

const styles = (theme) => ({
	root: {},
	button1: {
		marginLeft: 20
	},
	button2: {
		marginLeft: 20
	}
})

Profile.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Profile)

// 	render() {
// 		return (
// 			<div>
// 				<Logo />
// 				<NavBar />
// 				<div className="size">
// 					<Link to="/editprofil">
// 						<Button color="primary" to="/signup">
// 							Modifier profil
// 						</Button>
// 					</Link>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default Profil
