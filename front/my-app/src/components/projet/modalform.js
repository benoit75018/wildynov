import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from '@material-ui/core/TextField'
import './modalprovisoire.css'
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
<<<<<<< HEAD
			<div className="size">
				<div>
					<RaisedButton onClick={this.handleClickOpen} label="ajouter un projet" primary={true} />

					<Dialog
						style={{ Color: '#00BCD4' }}
						className="container"
=======
			<div>
				<div className="size">
					<RaisedButton onClick={this.handleClickOpen} label="ajouter un projet" primary={true} />

					<Dialog
>>>>>>> c4f398afedc062b72cfcd5eed6a6c82bf28414b0
						fullScreen={fullScreen}
						open={this.state.open}
						onClose={this.handleClose}
						aria-labelledby="responsive-dialog-title"
					>
<<<<<<< HEAD
						<DialogTitle className="title" id="responsive-dialog-title">
							{'Nouveau Projet'}
						</DialogTitle>

						<form className="form">
							<TextField
								style={{ Color: '#00BCD4' }}
								className="input"
=======
						<DialogTitle id="responsive-dialog-title">{'Nouveau Projet'}</DialogTitle>

						<form className="form">
							<TextField
>>>>>>> c4f398afedc062b72cfcd5eed6a6c82bf28414b0
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
<<<<<<< HEAD
								className="input"
=======
>>>>>>> c4f398afedc062b72cfcd5eed6a6c82bf28414b0
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
<<<<<<< HEAD
									style={{ Color: '#00BCD4' }}
									className="input"
=======
>>>>>>> c4f398afedc062b72cfcd5eed6a6c82bf28414b0
									required
									id="required"
									multiline
									rowsMax="3"
									value={this.state.title}
									label="titre du projet"
									defaultValue=""
									name="title"
									margin="normal"
								/>
							</div>

							<div>
								<TextField
<<<<<<< HEAD
									style={{ labelColor: '#00BCD4' }}
									className="input"
									required
									id="required"
									multiline
									rowsMax="180"
=======
									required
									id="required"
									multiline
									rowsMax="20"
>>>>>>> c4f398afedc062b72cfcd5eed6a6c82bf28414b0
									value={this.state.description}
									label="description du projet"
									defaultValue=""
									name="description"
									margin="normal"
								/>
							</div>

							<div>
								<TextField
<<<<<<< HEAD
									className="input"
=======
>>>>>>> c4f398afedc062b72cfcd5eed6a6c82bf28414b0
									required
									id="required"
									value={this.state.tag}
									label="mots clés"
<<<<<<< HEAD
									defaultValue="mots clés"
=======
									defaultValue=""
>>>>>>> c4f398afedc062b72cfcd5eed6a6c82bf28414b0
									name="tag"
									margin="normal"
								/>
							</div>
							<br />
						</form>

<<<<<<< HEAD
						<DialogActions className="button">
=======
						<DialogActions>
>>>>>>> c4f398afedc062b72cfcd5eed6a6c82bf28414b0
							<Button onClick={this.handleClose} color="primary">
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
