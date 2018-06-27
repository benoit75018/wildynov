import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const theme = createMuiTheme({
  palette: {
    primary: { main: '#3f51b5' },
  },
})
class LoginAdmin extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (
      <div>
         <MuiThemeProvider theme={theme}>
          
        <nav>
     
           <TextField 
             hintText="Enter your mail"
             floatingLabelText="Admin" 
             variant="raised" color="primary"            
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               />
            <br/>
            <Button variant="raised" color="primary" style={style}>Connexion</Button>
             
             </nav>
             
         </MuiThemeProvider>
        
      </div>
    );
  }
}

const style = {
  margin: 15,
 };

export default LoginAdmin;