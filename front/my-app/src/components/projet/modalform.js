import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from '@material-ui/core/TextField'

import { MySnackbarContentWrapper } from '../login/alert'
import Snackbar from '@material-ui/core/Snackbar'
/*CREATE A MODAL WITH MATERIAL FOR A PROJECT FORM */
class ResponsiveDialog extends React.Component {
	state = {
		open: false
	}

	handleClickOpen = () => {
		this.setState({ open: true })
	}

	handleClose = () => {
		this.setState({ open: false })
	}

	render() {
		const { fullScreen } = this.props

		return (
			/*PROJECTFORM*/
			<div className="size">
				<div>
					<RaisedButton onClick={this.handleClickOpen} label="ajouter un projet" primary={true} />

					<Dialog
						style={{ Color: '#00BCD4' }}
						className="container"
						fullScreen={fullScreen}
						open={this.state.open}
						onClose={this.handleClose}
						aria-labelledby="responsive-dialog-title"
					>
						<div className="title">
							<DialogTitle className="title" id="responsive-dialog-title">
								{'Nouveau Projet'}
							</DialogTitle>
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

							<div className="row2">
								<TextField
									onChange={this.handleChange}
									id="multiline-static"
									label="Multiline"
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
					</Dialog>
				</div>
			</div>
		)
	}
}

ResponsiveDialog.propTypes = {
	fullScreen: PropTypes.bool.isRequired
}

export default withMobileDialog()(ResponsiveDialog)
