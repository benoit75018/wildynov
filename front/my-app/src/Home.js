import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './components/projet/Projet.css'
import NavBar from './components/AppBar'
import Projet from './components/projet/Projet'
import Profil from './components/profil/Profil'
/*HE HOME PAGE FOR STUDENTS*/
class ModalSwitch extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			/*/CREATE ROUTES */
			<div>
				<Switch>
					<Route exact path="/home" component={initial} />
					<Route path="/projet" component={Projets} />
					<Route path="/profil" component={ProfilForm} />
				</Switch>
			</div>
		)
	}
}
/* COMPONENT */
const routes = [ { id: 1, title: <Projet /> } ]
const routes1 = [ { id: 1, title: <Profil /> } ]

/*FRONT OF THIS PAGE */

export const initial = () => (
	<div>
		<div className="containers">
			<a href="#" linkButton={true} href="/home" class="brand-logo center">
				{<img src="https://image.noelshack.com/fichiers/2018/24/3/1528883121-webp-net-resizeimage.png" />}
			</a>

			<NavBar />
		</div>
	</div>
)
/*/CALL THE NEW ROUTE*/

export const Projets = () => (
	<div>
		{routes.map((i) => (
			<Link
				key={i.id}
				to={{
					pathname: `/projet/${i.id}`
				}}
			>
				<p>{i.id}</p>
			</Link>
		))}
	</div>
)

;({ match }) => {
	const route = routes[parseInt(match.params.id, 10)]
	return (
		<div>
			<h1>{route.id}</h1>
		</div>
	)
}

/*CALL ANOTHER NEW ROUTE */
export const ProfilForm = () => (
	<div>
		{routes1.map((i) => (
			<Link
				key={i.id}
				to={{
					pathname: `/profil/${i.id}`
				}}
			>
				<p>{i.id}</p>
			</Link>
		))}
	</div>
)

;({ match }) => {
	const route1 = routes1[parseInt(match.params.id, 10)]

	return (
		<div>
			<h1>{route1.id}</h1>
		</div>
	)
}

/*EXPORT THIS FILE */
export const Home = () => (
	<Router>
		<Route component={ModalSwitch} />
	</Router>
)

export default Home
