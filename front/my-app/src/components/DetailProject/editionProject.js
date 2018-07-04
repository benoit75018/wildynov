import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import withTheme from '@material-ui/core/styles/withTheme';
import axios from 'axios'


//import AccountCircle from '@material-ui/icons/AccountCircle';




const styles = theme => ({
  card:{
    height:350,
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  imput: {
    marginLeft: theme.spacing.unit,
    width: 100,
    margin: 15
  },
  container: {
  display: 'flex',
  flexWrap: 'wrap',
  }
});

class EditionProject extends React.Component {
  constructor(props){
    super(props);
    // this.statresolve
    this.state = {
      project: []
    }}
componentDidMount() {

axios 
.get('http://localhost:8080/projets/showProjet/:detail')
.then((response) => { console.log('--response--', response.data.results)
this.setState({ project: response.data.results })
console.log('this.state.project ', this.state.project) })
 .catch((err) => {
  // <CardContent> <Typography variant="title" /> { console.log('caught it!',
  console.log(err)}) 
  }

render() {
  const EditionProject = this.state.project.map(e => e.deadline_project)
  const EditionProject1 = this.state.project.map(e => e.deadline_application)
  const EditionProject2 = this.state.project.map(e => e.created_at)
  const EditionProject3 = this.state.project.map(e => e.profile_id)


  return (
    <div className="EditionProject">
      <Card className={this.props.classes.card}>
        <CardContent>
        <Typography variant="title" gutterBottom>
        Edition du project
      </Typography>
          
          <Typography className={this.props.classes.pos} color="textSecondary">
            
          </Typography>
          <br/>

          <p>Nom de l'auteur du projet: {EditionProject3}</p> 
          <p>Date de création: {EditionProject2}</p>
          <p>Date de l'édition: {EditionProject}</p>
          <p>Date de vadilité: {EditionProject1}</p>
       

        </CardContent>
       
      </Card>
    </div>
    
  );
}
}


export default withStyles(styles)(EditionProject);


