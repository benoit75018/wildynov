import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Logo from '../logo/Logo'

class FirstConnexion extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: ''
		}
	}
	render() {
		return (
			<div>
				<Logo />
				<div class="register">
					<MuiThemeProvider>
						<TextField hintText="@enov" type="email" floatingLabelText="Email" />

						<br />
						<RaisedButton label="Send" primary={true} />
					</MuiThemeProvider>
				</div>
			</div>
		)
	}
}

export default FirstConnexion
