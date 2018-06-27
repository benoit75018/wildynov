import React, { Component } from 'react'
import './App.css'
import { Router } from '@reach/router'
import Login from './components/login/Login'
import Signup from './components/login/FirstConnexion'
import Home from './Home'
import Projet from './components/projet/Projet'
import Profil from './components/profil/Profil'

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
					<Login path="/login" />
					<Signup path="/signup" />
					<Home path="/home" />
					<Projet path="/projet" />
					<Profil path="/profil" />
				</Router>
			</div>
		)
	}
}

export default App
