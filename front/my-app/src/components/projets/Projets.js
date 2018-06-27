import React, { Component } from 'react'

// Importations de Material-ui
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import axios from 'axios'
// Importations fichiers
import Block from './Block'
import './Projets.css'
// import Demo from '../Demo';

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
			filtre: [],
			projects: []
		}
	}

	componentDidMount() {
		// console.log('--++++--eqrerzerzerz')
		axios
			.get('http://localhost:8080/allprojets/projets')
			.then((response) => {
				console.log('--response--', response.data.results)
				this.setState({ projects: response.data.results })
				console.log('this.state.projects ', this.state.projects)
			})
			.catch((err) => {
				console.log('caught it!', err)
			})
	}

	handleSubmit = (event) => {
		event.preventDefault()
	}

	updateFilter = (event) => {
		this.setState({ filter: event.target.value })
	}

	render() {
		const { classes } = this.props

		// Projets.map( (i) => {
		// return (
		//   < Block
		//   title={Projets[i].title} description={Projets[i].description}
		//   />
		return (
			<div className={classes.root}>
				<MuiThemeProvider theme={theme}>
					{/*fonction onChange pour récupérer la valeur entrée dans le Textfield */}
					<TextField hintText="Nom" floatingLabelText="Nom" onChange={this.updateFilter} />
					<Button size="small" variant="raised" color="primary" className={classes.button1}>
						Rechercher
					</Button>
					<Button size="small" variant="raised" color="primary" className={classes.button2}>
						+ Ajouter un projet
					</Button>
					<br />
					<br />
					<br />
					<Grid container>
						{// NB: pour moi, "Projects" signifie tous les projets. L'argument "project" représente chacun des projets (chaque projet, individuellement); tandis que "i" représente chaque propriété/clef à l'intérieur de chaque projet...
						this.state.projects.map((project) => {
							{
								console.log(project.id)
							}

							return (
								<Grid item xs={12} md={6} lg={3}>
									<Block title={project.title} description={project.description} />
									{/* <div>{project.title}</div>
										<div>{project.description}</div> */}
								</Grid>
							)
						})}
					</Grid>
				</MuiThemeProvider>
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
