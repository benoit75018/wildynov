import React from 'react'
import NavBar from './components/AppBar'

/*HE HOME PAGE FOR STUDENTS*/
class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				<div className="containers">
					<a href="/home" className="brand-logo center">
						{
							<img
								src="https://image.noelshack.com/fichiers/2018/24/3/1528883121-webp-net-resizeimage.png"
								alt="logo"
							/>
						}
					</a>

					<NavBar />
				</div>
			</div>
		)
	}
}

export default Home
