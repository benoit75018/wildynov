import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from "axios"


const styles = theme => ({
card:{
    height:350
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
    marginBottom: 12,
  },
  imput: {
    marginLeft: theme.spacing.unit,
    // width: 100,
    // margin: 15
  }
});



class Membres extends Component{
  constructor(props){
    super(props)
    this.state= {
      members:[]
    }
  }
  //const { classes } = props;
  //const bull = <span className={classes.bullet}>•</span>;
  //console.log(classes.card)
  // console.log(props);
componentDidMount(){
  axios
  .get(`http://localhost:8080/projets/membrestoproject${this.props.projectId}`)
  .then(response => {
    //console.log("--response--", response.data )
    this.setState({ members: response.data })
})
}

  render() { 
    const { classes } = this.props;
  return (
    
    <div className="membres">
      <Card className={classes.card}>
        <CardContent>
                <Typography variant="title" gutterBottom>
                Membres de l'équipe
            </Typography> 
                <Typography className={classes.pos} color="textSecondary">  
            </Typography>
            <br/>
            <p className="NOM">Nom: {}</p>
            <p className="Prenom"> Prénom: {}</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>


        </CardContent>
      </Card>
    </div>
    
  );
}
//   Membres.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
}
export default withStyles(styles)(Membres);

