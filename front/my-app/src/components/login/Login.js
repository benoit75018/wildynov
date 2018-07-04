import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import './logincss.css'
import TextField from 'material-ui/TextField'
import Logononclick from '../logo/Logononcliquable'
import { Link } from '@reach/router'
import axios from 'axios'
import { MySnackbarContentWrapper } from './alert'
import Snackbar from '@material-ui/core/Snackbar'

class Login extends React.Component {
constructor(props) {
super(props)
this.state = {
email: '',
password: '',
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
const user = this.state

if (details === 'user connected') {
}
if (details === 'Email and password does not match') {
}
axios.post('http://localhost:8080/auth/login', user).then((response) => {
const token = response.headers['x-access-token']

localStorage.setItem('token', token)
if (response.data.details === 'user connected') {
const snack = {
variant: 'success',
message: 'Connecté avec succés!'
}

return (
this.setState({ snack, displaySnack: true }), window.location.replace('http://localhost:3000/home')
)
}

if (response.data.failed === 'Email and password does not match') {
const snack = {
variant: 'warning',
message: 'Email and password does not match!'
}

return this.setState({ snack, displaySnack: true }) // () => window.location.reload('http://localhost:3000/login'))
}
if (response.data.failed === 'Email does not exits') {
const snack = {
variant: 'error',
message: 'Email does not exits!'
}

return this.setState({ snack, displaySnack: true }) //, window.location.reload('http://localhost:3000/login '))
}
})
}

render() {
return (
<div className="body">
<Logononclick />
<div className="form">
<TextField
onChange={this.handleChange}
hintText="email"
name="email"
variant="raised"
color="primary"
/>
<br />
<TextField
onChange={this.handleChange}
type="password"
name="password"
hintText="enter your Password"
/>
<br />
<RaisedButton
type="button"
onClick={this.handleSubmit}
label="Connexion"
primary={true}
style={style}
/>
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

<Link to="/signup">
<RaisedButton label="Première connexion" primary={true} to="/signup" />
</Link>
</div>
</div>
)
}
}
const style = {
margin: 15
}
export default Login