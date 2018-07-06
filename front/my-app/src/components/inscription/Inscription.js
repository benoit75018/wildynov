import React from 'react'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from 'material-ui/TextField'
import NavBar from '../AppBar'

const theme = createMuiTheme({
	palette: {
		primary: { main: '#3f51b5' }
	}
})

class Inscription extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			first_name: '',
			name: '',
			campus: '',
			promo: '',
			skill: ''
		}
	}

	render() {
		return (
			/*FRONT OF THIS PAGE */

			<div>
				<a linkButton={true} href="/home" class="brand-logo center">
					{
						<img
							src="https://image.noelshack.com/fichiers/2018/24/3/1528883121-webp-net-resizeimage.png"
							alt="logo"
						/>
					}
				</a>
				<NavBar />

				<MuiThemeProvider theme={theme}>
					<nav>
						<TextField hintText="Nom" floatingLabelText="Nom" />
						<br />
						<TextField hintText="Prénom" floatingLabelText="Prénom" />
						<br />
						<TextField hintText="Compétences" floatingLabelText="Compétences" />
						<br />
						{/* <SelectCampus /> */}
						<br />
						{/* <SelectPromo /> */}
						<br />
						<Button variant="raised" color="primary" style={style}>
							Enregistrer
						</Button>
					</nav>
				</MuiThemeProvider>
			</div>
		)
	}
}
const style = {
	margin: 15
}

export default Inscription
