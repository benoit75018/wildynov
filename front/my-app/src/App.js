import React, { Component } from 'react'
import { Router } from '@reach/router'

// Importations locales - Composants
import Home from './Home'
import Login from './components/login/Login'
import Signup from './components/login/FirstConnexion'
import Projets from './components/projets/Projets'
import Editprofil from './components/profil/editprofil'
import LoginAdmin from './components/loginAdmin/LoginAdmin'
import ClippedDrawer from './components/adminAllprojects/adminProjects'
import SimpleTable from './components/adminAllprojects/SimpleTable'
import Inscription from './components/inscription/Inscription'
import DetailProject from './components/DetailProject/DetailProject'
import Projetformulaire from './components/projet/formulaire.js'
import DetailProfile from './components/profil/profilbis'
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
					<Login path="/" />
					<Signup path="/signup" />
					<Home exact path="/home" />
					<Projets path="/home" />
					<Inscription path="/registration" />
					<DetailProfile path="/profil" />
					<Editprofil path="/editprofil" />
					<LoginAdmin path="/login/admin" />
					<ClippedDrawer path="/admin/home" />
					<SimpleTable path="/admin/projet" />
					<Projetformulaire path="/addprojet" />
					<DetailProject path="/detailproject/:projectId" />
				</Router>
			</div>
		)
	}
}

export default App
