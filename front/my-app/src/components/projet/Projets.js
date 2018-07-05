import React, { Component } from 'react'

// Material-UI //
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import axios from 'axios'

// Importations locales //
import Block from './Block'

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

	handleSubmit = (event) => {
		event.preventDefault()
	}

	updateFilter = (event) => {
		this.setState({ filter: event.target.value })
	}

	render() {
		const { classes } = this.props

		
		return (
			<div className="size1">
				<div className={classes.root}>
					<MuiThemeProvider theme={theme}>
						{/*fonction onChange pour récupérer la valeur entrée dans le Textfield */}

						<br />
						<br />
						<br />
						<Grid container>
							{// NB: pour moi, "Projects" signifie tous les projets. L'argument "project" représente chacun des projets (chaque projet, individuellement); tandis que "i" représente chaque propriété/clef à l'intérieur de chaque projet...
							this.state.projects.map((project) => {
								
								return (
									<Grid item xs={12} md={6} lg={3}>
										<Block {...project} />
										{/* <div>{project.title}</div>
										<div>{project.description}</div> */}
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
