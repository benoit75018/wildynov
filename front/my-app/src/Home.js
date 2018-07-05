import React from 'react'
import NavBar from './components/AppBar'
import Projets from './components/projets/Projets'
import Logo from './components/logo/Logo'

/*HE HOME PAGE FOR STUDENTS*/
class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				<Logo />
				<NavBar />
				<Projets />
			</div>
		)
	}
}

export default Home
