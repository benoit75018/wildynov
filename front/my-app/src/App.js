import React, { Component } from 'react'
import './App.css'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Signin } from './components/login/Login'
import { initial } from './Home'
import { Projets } from './components/projet/Projet'
import { ProfilForm } from './components/profil/Profil'
import LoginAdmin from './components/loginAdmin/LoginAdmin'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			/*CALL ROUTES*/
			<div className="App" />
		)
	}
}

export default App
