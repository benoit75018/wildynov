import React from 'react'
import './Projetss.css'
import NavBar from '../AppBar'
import axios from 'axios'
import Logo from '../logo/Logo'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import './form.css'
import TextField from '@material-ui/core/TextField'
import { MySnackbarContentWrapper } from '../login/alert'
import Snackbar from '@material-ui/core/Snackbar'
class Projetformulaire extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',

			deadline_project: '',
			deadline_application: '',
			description: '',

			displaySnack: false,
			snack: { variant: 'warning', message: '' }
		}
	}
	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		this.setState({ displaySnack: false })
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleSubmit = (details) => {
		const projet = this.state

		console.log(this.state)
		axios
			.post('http://localhost:8080/projet/addProjet', projet, {
				headers: {
					'x-access-token': localStorage.getItem('token')
				}
			})
			.then((response) => {
				window.location.href = 'http://localhost:3000/home'
				const snack = {
					variant: 'success',
					message: 'Projet ajouté avec succés!'
				}
				return this.setState({ snack, displaySnack: true })
			})
	}

	render() {
		return (
			<div>
				<Logo />
				<NavBar />
				<div className="titles">
					<DialogTitle className="title">{'Nouveau Projet'}</DialogTitle>
				</div>
				<div className="container">
					<div classname="row1">
						<br />
						<TextField
							onChange={this.handleChange}
							style={{ Color: '#00BCD4' }}
							className="input"
							id="date"
							name="deadline_application"
							label="candidature"
							type="date"
							defaultValue=""
							InputLabelProps={{
								shrink: true
							}}
						/>
						<br />
						<TextField
							onChange={this.handleChange}
							className="input"
							id="date"
							name="deadline_project"
							label="fin du projet "
							type="date"
							defaultValue=""
							InputLabelProps={{
								shrink: true
							}}
						/>
						<br />
						<div>
							<TextField
								onChange={this.handleChange}
								style={{ Color: '#00BCD4' }}
								className="input"
								required
								id="required"
								multiline
								rowsMax="7"
								value={this.state.title}
								label="titre du projet"
								defaultValue=""
								name="title"
								margin="normal"
							/>
						</div>
					</div>

					<div className="row2">
						<TextField
							onChange={this.handleChange}
							id="multiline-static"
							className="input1"
							label="Description"
							multiline
							rows="4"
							value={this.state.description}
							name="description"
							defaultValue="Description du projet"
							margin="normal"
						/>
						{/* <TextField
						onChange={this.handleChange}
						style={{ labelColor: '#00BCD4' }}
						className="input"
						required
						id="required"
						multiline
						rowsMax="180"
						value={this.state.description}
						label="description du projet"
						defaultValue=""
						name="description"
						margin="normal"
					/>
				</div> */}
					</div>
					<div>
						<Snackbar
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							open={this.state.displaySnack}
							autoHideDuration={3}
						>
							<MySnackbarContentWrapper {...this.state.snack} onClose={this.handleClose} />
						</Snackbar>
					</div>
					<br />
				</div>
				<DialogActions className="button">
					<Button onClick={this.handleSubmit} color="primary">
						Valider
					</Button>
				</DialogActions>
			</div>
		)
	}
}

export default Projetformulaire
