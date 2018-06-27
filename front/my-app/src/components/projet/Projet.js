import React from 'react'
import './Projets.css'
import NavBar from '../AppBar'
import ResponsiveDialog from './modalform'

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
				<a href="/home" className="brand-logo center">
					{
						<img
							src="https://image.noelshack.com/fichiers/2018/24/3/1528883121-webp-net-resizeimage.png"
							alt="logo"
						/>
					}
				</a>
				<NavBar />
				<ResponsiveDialog />
			</div>
		)
	}
}

export default Projet
