import React from 'react'
import NavBar from '../AppBar'
import SimpleTable from './SimpleTable'
import Logo from '../logo/Logo'
class Projetlist extends React.Component {
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
				<SimpleTable />
			</div>
		)
	}
}

export default Projetlist
