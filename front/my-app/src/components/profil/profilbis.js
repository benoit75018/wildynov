import React, { Component } from 'react'
// import TextField from 'material-ui/TextField';
import Typography from '@material-ui/core/Typography'
import NavBar from '../AppBar'
import Logo from '../logo/Logo'
import axios from 'axios'


class DetailProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: []
    }
  }


	componentDidMount() {
		
		axios
			.get('http://localhost:8080/user/profile')
			.then((response) => {
				console.log('--response--', response.data)
				this.setState({ profile: response.data })
				console.log('this.state.profile ', this.state.profile.name)
			})
			.catch((err) => {
				{
					console.log('caught it!', err)
				}
			})
	}
	render() {
		return (
			<div>
				<Logo />
				<NavBar />
				<div>
					<Typography variant="title" gutterBottom>
						<br />
						<h5>{this.state.profile.name}</h5>
						<h5>{this.state.profile.first_name}</h5>
						<h5>{this.state.profile.campus}</h5>
						<h5>{this.state.profile.year}</h5>
					</Typography>
				</div>
			</div>
		)
	}

}

export default DetailProfile
