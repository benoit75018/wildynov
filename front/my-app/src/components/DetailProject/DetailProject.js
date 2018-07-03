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
  };
  
  componentDidMount() {
    axios
    .get('http://localhost:8080/projets/showProjet/:detail')
    .then((response) => {
      this.setState({ project: response.data.results })
    })
    .catch((err) => {
    })
  }

  render() {
    return (
      <div> {/* div 1 */}
        <Logo />
          <NavBar />
            <div> {/* div 2 */}
              <Typography variant="title" gutterBottom>
                <br/>
                <h5>Détail Du Project</h5>
              </Typography>
              <div className='test'> {/* div 'test' */}
                <Grid container>
                  <Grid item xs={6} >
                    <Membres/>
                  </Grid>
                  <Grid item  xs={6}>
                    <EditionProject/>
                  </Grid>
                </Grid> {/* Fin de Grid container */}
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <SimpleCard/>
                  </Grid>
                </Grid> {/* Fin de Grid container */}
                <div>
                  <ButtonSizes/>
                </div>
              </div> {/* Fin de div 'test' */}
            </div> {/* Fin de div 2 */}
      </div> // Fin de div 3
    );
  }

} // fin DetailProject

export default DetailProject;


