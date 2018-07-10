import React, { Component } from 'react'

// Material-UI //
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import axios from 'axios'

// Importations locales //
import Block from './Block'
import './projets.css'

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#6effff',
			main: '#3f50b5',
			dark: '#00b2cc',
			contrastText: '#fff'
		}
	}
})

class Projets extends Component {
	constructor(props) {
		super(props)

		this.state = {
			projects: []
		}
	}

	componentDidMount() {
		axios
			.get('http://localhost:8080/projets/showProjet')
			.then((response) => {
				console.log('--response--', response.data.results)
				this.setState({ projects: response.data.results })
				console.log('this.state.projects ', this.state.projects)
			})
			.catch((err) => {
				console.log('caught it!', err)
			})
	}

	// Fonction pour trier par ordre ascendant
	sortByProjectAsc = () => {
		let sorted = this.state.projects.sort((a, b) => (a.title > b.title ? 1 : -1))
		this.setState({ projects: sorted })
	}

	// Fonction pour trier par ordre descendant
	sortByProjectDesc = () => {
		let sorted = this.state.projects.sort((a, b) => (a.title < b.title ? 1 : -1))
		this.setState({ projects: sorted })
	}

	render() {
		console.log('this.state.projects: ', this.state.projects)
		const { classes } = this.props
		return (
			<div className="size1">
				<div className={classes.root}>
					<MuiThemeProvider theme={theme}>
						{/* Bouton: filtrer les projets par ordre ascendant */}
						<Button
							size="small"
							variant="raised"
							color="primary"
							className={classes.button1}
							onClick={this.sortByProjectAsc}
						>
							A - Z
						</Button>
						<Button
							size="small"
							variant="raised"
							color="primary"
							className={classes.button1}
							onClick={this.sortByProjectDesc}
						>
							Z - A
						</Button>
						<br />
						<br />
						<br />
						<Grid container>
							{// NB: pour moi, "Projects" signifie tous les projets. L'argument "project" représente chacun des projets (chaque projet, individuellement); tandis que "i" représente chaque propriété/clef à l'intérieur de chaque projet...
							this.state.projects.map((project) => {
								{
									console.log('it works!')
								}

								return (
									<Grid item xs={12} md={6} lg={3}>
										<Block title={project.title} description={project.description} />
									</Grid>
								)
							})}
						</Grid>
					</MuiThemeProvider>
				</div>
			</div>
		)
	}
}

const styles = (theme) => ({
	root: {},
	button1: {
		marginLeft: 20
	},
	button2: {
		marginLeft: 20
	}
})

Projets.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Projets)
