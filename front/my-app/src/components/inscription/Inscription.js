import React from 'react'

// Menus déroulants
import SelectsCampus from './SelectCampus'
import SelectsPromo from './SelectPromo'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from 'material-ui/TextField'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from '../AppBar'

const theme = createMuiTheme({
	palette: {
		primary: { main: '#3f51b5' }
	}
})

class ModalSwitch extends React.Component {
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
			/*CREATE ROUTES*/
			<div>
				<Switch>
					<Route exact path="/inscription" component={Registration} />
				</Switch>
			</div>
		)
	}
}

/*FRONT OF THIS PAGE */
export const Registration = () => (
	/* CAN CLICK ON LOGO */
	<div>
		<a href="#" linkButton={true} href="/home" class="brand-logo center">
			{<img src="https://image.noelshack.com/fichiers/2018/24/3/1528883121-webp-net-resizeimage.png" />}
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
				<SelectsCampus />
				<br />
				<SelectsPromo />
				<br />
				<Button variant="raised" color="primary" style={style}>
					Modifier
				</Button>
				<Button variant="raised" color="primary" style={style}>
					Enregistrer
				</Button>
			</nav>
		</MuiThemeProvider>
	</div>
)

/*FRONT OF THIS PAGE */
export const Registration = () => (
	<Router>
		<Route component={ModalSwitch} />
	</Router>
)
const style = {
	margin: 15
}

export default Registration
