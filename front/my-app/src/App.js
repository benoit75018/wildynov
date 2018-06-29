import React, { Component } from 'react'
import { Router } from '@reach/router'

// Importations locales - Composants
import Login from './components/login/Login'
import Signup from './components/login/FirstConnexion'
import Home from './Home'
import Projet from './components/projet/Projet'
import Projets from './components/projets/Projets'
import Profil from './components/profil/Profil'
import Editprofil from './components/profil/editprofil'
import CustomizedSnackbars from './components/login/alert'
// 

// Feuilles de style //
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			/*CALL ROUTES*/
			<div className="App">
				<Router>
					<DetailProjet path="/detail-projet" />
					<Login path="/login" />
					<Signup path="/signup" />
					<Projets path="/home" />
					<Projet path="/projet" />
					<Profil path="/profil" />
					<Editprofil path="/editprofil" />
				</Router>
				<CustomizedSnackbars />
			</div>
		)
	}
}

export default App
