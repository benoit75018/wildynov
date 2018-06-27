import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
<<<<<<< HEAD
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from '@reach/router'
=======
import RaisedButton from 'material-ui/RaisedButton'
>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a

const styles = {
	root: {
		flexGrow: 1
	},
	flex: {
		flex: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	}
}

class MenuAppBar extends React.Component {
	state = {
		auth: true,
		anchorEl: null
	}

	handleChange = (event, checked) => {
		this.setState({ auth: checked, content: null })
	}
	handleMenu = (event) => {
		this.setState({ anchorEl: event.currentTarget })
	}

	handleClose = () => {
		this.setState({ anchorEl: null })
	}

	render() {
		const { classes } = this.props
		const { auth, anchorEl } = this.state
		const open = Boolean(anchorEl)

		return (
			<div className={classes.root}>
<<<<<<< HEAD
				<AppBar position="static" style={{ backgroundColor: '#36B1A0' }}>
					<Toolbar>
						<Typography variant="title" color="inherit" className={classes.flex} />

						<Button color="inherit" href="/projet">
=======
				<AppBar position="static">
					<Toolbar>
						<Typography variant="title" color="inherit" className={classes.flex} />

						<Button color="inherit" linkButton={true} href="/projet">
>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a
							Projet
						</Button>

						{auth && (
							<div>
								<IconButton
									aria-owns={open ? 'menu-appbar' : null}
									aria-haspopup="true"
									onClick={this.handleMenu}
									color="inherit"
								>
									<AccountCircle />
								</IconButton>

								<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right'
									}}
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right'
									}}
									open={open}
									onClose={this.handleClose}
								>
<<<<<<< HEAD
									<Link to="/profil">
										<MenuItem onClick={this.handleClose}>Profile</MenuItem>
									</Link>
									<MenuItem onClick={this.handleClose}>My account</MenuItem>
=======
									{/*acces the route by linkbutton imported */}
									<li className="button">
										<RaisedButton label="Profil" linkButton={true} href="/profil" />
									</li>
									<li>
										{' '}
										<RaisedButton label="Deconnexion" checked={auth} />
									</li>
>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a
								</Menu>
							</div>
						)}
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}

MenuAppBar.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MenuAppBar)
