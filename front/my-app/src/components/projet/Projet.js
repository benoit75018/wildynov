import React from 'react'
import './Projetss.css'
import NavBar from '../AppBar'
import ResponsiveDialog from './modalform'
import Projets from '../projets/Projets'
import Logo from '../logo/Logo'
class Projet extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			Titre: '',
			last_name: ''
		}
	}

	render() {
		return (
			<div>
				<Logo />
				<NavBar />
				<Projets /> <ResponsiveDialog />
			</div>
		)
	}
}

export default Projet
