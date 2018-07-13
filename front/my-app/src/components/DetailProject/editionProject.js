import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


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
  state = {
    date: '',
    date2: ''
  }

dateSliced = () => {
  return
  this.state.date  
} 
dateSliced2 = () => {
  return
  this.state.date2  
} 
render() {

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
          <p>Nom de l'auteur du projet: {this.props.state.title}</p>
          <p>Date de création: {this.props.project3}</p>
          <p>Date de l'édition : {this.props.project}</p>
          <p>Date de vadilité: {this.props.project2}</p>
        </CardContent>
      </Card>
    </div>

  );
}
}
export default withStyles(styles)(EditionProject);


