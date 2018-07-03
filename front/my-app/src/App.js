import React, { Component } from 'react'
import { Router } from '@reach/router'

// Importations locales - Composants
import Home from './Home'
import Login from './components/login/Login'
import Signup from './components/login/FirstConnexion'
import Projet from './components/projet/Projet'
import Projets from './components/projets/Projets'
import Profile from './components/profil/Profil'
import Editprofil from './components/profil/editprofil'
import LoginAdmin from './components/loginAdmin/LoginAdmin'
import ClippedDrawer from './components/adminAllprojects/adminProjects'
// import SimpleTable from './components/adminAllprojects/SimpleTable'
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
					<DetailProject path="/detailproject" />
					<Login path="/login" />
					<Signup path="/signup" />
					<Home exact path="/home" />
					<Projets path="/home" />
					<Projet path="/projet" />
					<Inscription path="/registration" />
					<Profile path="/profil" />
					<Editprofil path="/editprofil" />
					<LoginAdmin path="/login/admin" />
					<ClippedDrawer path="/admin/home" />
					{/* <SimpleTable path="/admin/projet" /> */}
				</Router>
			</div>
		)
	}
}

export default App
