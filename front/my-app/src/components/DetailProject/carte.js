import React from 'react' ;
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import withTheme from '@material-ui/core/styles/withTheme';
import axios from 'axios'

const styles = {
card: {
  height:350,

},
bullet: {
display: 'inline-block',
margin: '0 2px',
transform: 'scale(0.8)'
},
title: {
marginBottom: 16,
fontSize: 14
},
pos: {
marginBottom: 12
}
};

class SimpleCard extends React.Component {
  constructor(props){
    super(props);
    // this.statresolve
    this.state = {
      project: []
    }}
componentDidMount() {

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
  };


axios 
.get('http://localhost:8080/projets/showProjet/:detail')
.then((response) => { console.log('--response--', response.data)
this.setState({ project: response.data})
console.log('this.state.project ', this.state.project) }) 
.catch((err) => {
// <CardContent> <Typography variant="title" /> { console.log('caught it!',
console.log(err)}) 
}
render() {
  const infoProject = this.state.project.map(e => e.description)

// this
// .state
// .project
// .map(e => e.description) ;{
// const infoProject = this.state.project.map(e => e.description)}
return (
<div className="carte">
<Card >
<CardContent>
<Typography variant="title" gutterBottom>
Description du Projet
</Typography>

<Typography>
<p>{infoProject}</p>
{/* <p>
Hac ex causa conlaticia stipe Valerius humatur ille Publicola et subsidiis
amicorum mariti inops cum liberis uxor alitur Reguli et dotatur ex aerario filia
Scipionis, cum nobilitas florem adultae virginis diuturnum absentia pauperis
erubesceret patris.</p> */}
</Typography>
<Typography  color="textSecondary"></Typography>
</CardContent>

</Card>
</div>

);
}

}

export default withStyles(styles)(SimpleCard)