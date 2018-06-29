import React, { Component } from 'react'
import { Router } from '@reach/router'

// Importations locales - Composants
import Home from './Home'
import Login from './components/login/Login'
import Signup from './components/login/FirstConnexion'
import Projet from './components/projet/Projet'
import Projets from './components/projets/Projets'
import Profil from './components/profil/Profil'
import Editprofil from './components/profil/editprofil'
import CustomizedSnackbars from './components/login/alert'
import Inscription from './components/inscription/Inscription'
import DetailProject from './components/DetailProject/DetailProject'

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
					<DetailProject path="/detailproject"/>
					<Login path="/login" />
					<Signup path="/signup" />
					<Projets path="/home" />
					<Projet path="/projet" />
					<Inscription path="/registration"/>
					<Profil path="/profil" />
					<Editprofil path="/editprofil" />
				</Router>
				<CustomizedSnackbars />
			</div>
		)
	}
}

export default App
