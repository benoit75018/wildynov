import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './DetailProject.css'
// import TextField from 'material-ui/TextField';
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import SimpleCard from './carte.js'
import Membres from './membres.js'
import EditionProject from './editionProject.js'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import ButtonSizes from './bouton.js'
import Paper from '@material-ui/core/Paper'
import NavBar from '../AppBar'
import Logo from '../logo/Logo'
import axios from 'axios'



class DetailProject  extends Component {
constructor(props){
  super(props);
  // this.statresolve
  this.state = {
    project: []
  }
  
  // descriptiresolve
  // name:''
  }

  componentDidMount() {
    const projectTest = [{
      id: 1 ,
      title: 'gardiennage',
      deadline_project: '2017-08-19 12:17:55 -0400',
      deadline_application: '2017-08-19 12:17:55 -0400',
      description: 'je suis mort je veux mourir',
      state: 1,       
      created_at: '2017-08-19 12:17:55 -0400',
      updated: '2017-08-19 12:17:55 -0400',
      profile_id: 42
    }]
  this.setState(
     { project: projectTest }
  )
 
}
  // axios
   // .get('http://localhost:8080/projets/showProjet/:detail')
   // .then((response) => {
   //   console.log('--response--', response.data.results)
   //   this.setState({ project: response.data.results })
   //   console.log('this.state.project ', this.state.project)
   // })
   // .catch((err) => {      
   //     // <CardContent>
   //     <Typography variant="title"  />
   //    {
   //      console.log('caught it!', err)
   //    } 
   // })
  
render() {
  const infoProject = this.state.project.map(e => e.title)
    return (
      <div>
        <Logo />
				<NavBar />
          <div>
            <Typography variant="title" gutterBottom>
              <br/>
              <h5>{infoProject}</h5>
            </Typography>
          <div className='test'>

          <Grid container>
            <Grid item xs={6} >
              <Membres results={this.state.project} />
            </Grid>
            <Grid item  xs={6}>
              <EditionProject results={this.state.project} />
            </Grid>
          </Grid>
                  
          <Grid container>
            <Grid item xs={12} md={12}>
              <SimpleCard/>
            </Grid>
          </Grid>
          <div>
            <ButtonSizes/>
          </div>
        </div>  
        </div>
        </div>
    );
  }
}
export default DetailProject;


