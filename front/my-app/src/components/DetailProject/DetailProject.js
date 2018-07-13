import React, { Component } from "react"
import "./DetailProject.css"
// import TextField from 'material-ui/TextField';
import SimpleCard from "./carte.js"
import Membres from "./membres.js"
import EditionProject from "./editionProject.js"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
//import ButtonSizes from "./bouton.js"
import NavBar from "../AppBar"
import Logo from "../logo/Logo"
import "./DetailProject.css"
// import TextField from 'material-ui/TextField';
import axios from "axios"
import Button from "@material-ui/core/Button";


class DetailProject extends Component {
  constructor(props) {
    super(props)
    // this.statresolve
    this.state = {
      project: {},
      dateSlice: '',
      dateSlice2: '',
      dateSlice3:''
    }

    // descriptiresolve
    // name:''
  }

  handleJoin=()=>{
 const projet = this.state
 console.log(this.state)

		axios
			.post(  
        `http://localhost:8080/projets/ProjetJoin/${this.props.projectId}` ,projet,{
				headers: {
					'x-access-token': localStorage.getItem('token')
        }
        
			})
			.then((response)=>{
        this.setState
      })
	
  } 
  componentDidMount() {
    //console.log(this.props)
    axios
      .get(
        `http://localhost:8080/projets/showProjetDetails/${this.props.projectId}`
      )
      .then(response => {
        //console.log("--response--", response.data )
        this.setState({ project: response.data })
        //console.log("this.state.project ", this.state.project)
      })
      .then(res => {
        const date= this.state.project.deadline_application.slice(0, 10)
        this.setState({ dateSlice: date})
        
      })
      .then(res => {
        const date2= this.state.project. deadline_project.slice(0, 10)
        this.setState({ dateSlice2: date2})
        
      })
      .then(res => {
        const date3= this.state.project. created_at.slice(0, 10)
        this.setState({ dateSlice3: date3})
        
      })
      .catch(err => {
        {
          console.log(" caught it!", err)
        }
      })
  }

  render() {
    //console.log('state', this.state)
    return (
      <div>
        <Logo />
        <NavBar />
        <div>
          <Typography variant="title" gutterBottom>
            <br />
            <span>{this.infoProject}</span>
          </Typography>
          <div className="test">
            <Grid container>
              <Grid item xs={6}>
                <Membres results={this.state.project} />
              </Grid>
              <Grid item xs={6}>
                <EditionProject 
                state={this.state.project} 
                project3={this.state.dateSlice3} 
                project={this.state.dateSlice} 
                project2={this.state.dateSlice2} />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} md={12}>
                <SimpleCard project={this.state.project} />
              </Grid>
            </Grid>
            <div>
            <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={this.handleJoin}
            >
            REJOINDRE
            </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailProject
