import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

//import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = (theme) => ({
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
	},
	imput: {
		marginLeft: theme.spacing.unit,
		width: 100,
		margin: 15
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	}
})

class EditionProject extends React.Component {
	render() {
		return (
			<div className="EditionProject">
				<Card className={this.props.classes.card}>
					<CardContent>
						<Typography variant="title" gutterBottom>
							Edition du project
						</Typography>

						<Typography className={this.props.classes.pos} color="textSecondary" />
						<br />

						<p>Nom de l'auteur du projet: {this.props.project.profile_id}</p>
						<p>Date de création: {this.props.project.created_at}</p>
						<p>Date de l'édition: {this.props.project.deadline_project}</p>
						<p>Date de vadilité: {this.props.project.deadline_application}</p>
					</CardContent>
				</Card>
			</div>
		)
	}
}

export default withStyles(styles)(EditionProject)
