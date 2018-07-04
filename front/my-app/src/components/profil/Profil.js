import React from 'react'

import './Profils.css'
import Button from '@material-ui/core/Button'

import NavBar from '../AppBar'
import Logo from '../logo/Logo'
import { Link } from '@reach/router'

class Profil extends React.Component {
	render() {
		return (
			<div>
				<Logo />
				<NavBar />
				<div className="size">
					<Link to="/editprofil">
						<Button color="primary" to="/signup">
							Modifier profil
						</Button>
					</Link>
				</div>
			</div>
		)
	}
}

export default Profil
