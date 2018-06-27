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
			<div className="App">
				<BrowserRouter>
					<div>
						<Switch>
							<Route exact path="/Login" component={Home} />
							<Route path="/Login/1" component={Signin} />
							<Route exact path="/home" component={initial} />
							<Route exact path="/projet" component={Projets} />
							<Route exact path="/profil" component={ProfilForm} />
							<Route exact path="/LoginAdmin" component={LoginAdmin} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		)
	}
}

export default App
