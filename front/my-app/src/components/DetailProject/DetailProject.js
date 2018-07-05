import React, { Component } from "react"
import "./DetailProject.css"
// import TextField from 'material-ui/TextField';
import SimpleCard from "./carte.js"
import Membres from "./membres.js"
import EditionProject from "./editionProject.js"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ButtonSizes from "./bouton.js"
import NavBar from "../AppBar"
import Logo from "../logo/Logo"

import "./DetailProject.css"
// import TextField from 'material-ui/TextField';

import axios from "axios"

class DetailProject extends Component {
  constructor(props) {
    super(props)
    // this.statresolve
    this.state = {
      project: []
    }

    // descriptiresolve
    // name:''
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/projets/showProjetDetails/${
          this.props.projectId
        }`
      )
      .then(response => {
        console.log("--response--", response.data.results)
        this.setState({ project: response.data.results })
        console.log("this.state.project ", this.state.project)
      })
      .catch(err => {
        {
          console.log(" caught it!", err)
        }
      })
  }

  render() {
    const infoProject = this.state.project.map(e => e.title)
    return (
      <div>
        <Logo />
        <NavBar />
        <div>
          <Typography variant="title" gutterBottom>
            <br />
            <h5>{infoProject}</h5>
          </Typography>
          <div className="test">
            <Grid container>
              <Grid item xs={6}>
                <Membres results={this.state.project} />
              </Grid>
              <Grid item xs={6}>
                <EditionProject results={this.state.project} />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} md={12}>
                <SimpleCard />
              </Grid>
            </Grid>
            <div>
              <ButtonSizes />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailProject
