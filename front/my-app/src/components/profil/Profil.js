import React from 'react'
import SelectsCampus from './SelectCampus'
import SelectsPromo from './SelectPromo'
import SelectSkills from './SelectSkills'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
<<<<<<< HEAD
import './Profils.css'
import Button from '@material-ui/core/Button'
import TextField from 'material-ui/TextField'
=======
import '../profil/Profil.css'
import Button from '@material-ui/core/Button'
import TextField from 'material-ui/TextField'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a
import NavBar from '../AppBar'

const theme = createMuiTheme({
	palette: {
		primary: { main: '#3f51b5' }
	}
})

<<<<<<< HEAD
class Profil extends React.Component {
=======
class ModalSwitch extends React.Component {
>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a
	constructor(props) {
		super(props)
		this.state = {
			first_name: '',
			last_name: '',
			campus: '',
			promo: '',
			compétences: ''
		}
	}
<<<<<<< HEAD

	render() {
		return (
			<div>
				<a href="/home" className="brand-logo center">
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
						<SelectsCampus />
						<br />
						<SelectsPromo />
						<br />
						<SelectSkills />
						<br />
						<Button variant="raised" color="primary" style={style}>
							Modifier
						</Button>
						<Button variant="raised" color="primary" style={style}>
							Enregistrer
						</Button>
					</nav>
				</MuiThemeProvider>
=======

	render() {
		return (
			/*CREATE ROUTES*/
			<div>
				<Switch>
					<Route exact path="/profil" component={ProfilForm} />
				</Switch>
>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a
			</div>
		)
	}
}
<<<<<<< HEAD
=======

/*FRONT OF THIS PAGE */
export const ProfilForm = () => (
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
				<SelectsCampus />
				<br />
				<SelectsPromo />
				<br />
				<SelectSkills />
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
export const Profil = () => (
	<Router>
		<Route component={ModalSwitch} />
	</Router>
)
>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a
const style = {
	margin: 15
}

export default Profil
