import React from 'react'
import NavBar from './components/AppBar'
import Projets from './components/projets/Projets'
import Logo from './components/logo/Logo'
import Block from './components/projets/Block'
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
				<Block />
			</div>
		)
	}
}

export default Home
