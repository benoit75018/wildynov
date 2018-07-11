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
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from '@reach/router'

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
				<AppBar position="static" style={{ backgroundColor: '#36B1A0' }}>
					<Toolbar>
						<Typography variant="title" color="inherit" className={classes.flex} />

						<Button color="inherit" href="/addprojet">
							Proposez un projet
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
									<Link to="/profil">
										<MenuItem onClick={this.handleClose}>Profile</MenuItem>
									</Link>
									<MenuItem onClick={this.handleClose}>Deconnexion</MenuItem>
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
