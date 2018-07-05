import React from 'react'
// Menus déroulants
import SelectCampus from '../profil/SelectCampus'
import SelectPromo from '../profil/SelectPromo'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from 'material-ui/TextField'
import NavBar from '../AppBar'

const theme = createMuiTheme({
	palette: {
		primary: { main: '#3f51b5' }
	}
})

class Inscription extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			profile= [
				first_name: '',
				name: '',
			   campus: '',
			   promo: '',
			   skill: ''
			]
		}
	}

	componentDidMount() {
		axios
			.post('http://localhost:8080/user/profile')
			.then((response) => {
				console.log('--response--', response.data.results)
				// this.setState({ profile: response.data.results })
				this.setState({ profile: response.data.results})
				
				console.log('this.state.projects ', this.state.profile.name)
			})
			.catch((err) => {
				console.log('caught it!', err)
			})
	}
	render() {
		return (
		
/*FRONT OF THIS PAGE */


	<div>
		<a linkButton={true} href="/home" class="brand-logo center" alt="">
			{<img src="https://image.noelshack.com/fichiers/2018/24/3/1528883121-webp-net-resizeimage.png" alt=""/>}
		</a>
		<NavBar />

		<MuiThemeProvider theme={theme}>
			<nav>
				<TextField hintText="Nom" floatingLabelText="Nom" />
				<br />
				<TextField hintText="Prénom" floatingLabelText="Prénom" />
				<br />
                <TextField hintText="Compétences" floatingLabelText="Compétences" />
                <br />
				<SelectCampus />
				<br />
				<SelectPromo />
				<br />
				<Button variant="raised" color="primary" style={style}>
					Enregistrer
				</Button>
			</nav>
		</MuiThemeProvider>
	</div>
)
	}}
const style = {
	margin: 15
}

export default Inscription
