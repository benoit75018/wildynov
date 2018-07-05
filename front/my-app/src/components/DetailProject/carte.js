import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = {
	card: {
		height: 350
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		marginBottom: 16,
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	}
}

class SimpleCard extends React.Component {
	render() {
		// this
		// .state
		// .project
		// .map(e => e.description) ;{
		// const infoProject = this.state.project.map(e => e.description)}
		return (
			<div className="carte">
				<Card>
					<CardContent>
						<Typography variant="title" gutterBottom>
							Description du Projet
						</Typography>

						<Typography>
							<span>{this.props.project.description}</span>
							{/* <p>
Hac ex causa conlaticia stipe Valerius humatur ille Publicola et subsidiis
amicorum mariti inops cum liberis uxor alitur Reguli et dotatur ex aerario filia
Scipionis, cum nobilitas florem adultae virginis diuturnum absentia pauperis
erubesceret patris.</p> */}
						</Typography>
						<Typography color="textSecondary" />
					</CardContent>
				</Card>
			</div>
		)
	}
}

export default withStyles(styles)(SimpleCard)
