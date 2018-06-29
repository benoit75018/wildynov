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


function EditionProject (props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="EditionProject">
      <Card className={classes.card}>
        <CardContent>
        <Typography variant="title" gutterBottom>
        Edition du project
      </Typography>
          
          <Typography className={classes.pos} color="textSecondary">
            
          </Typography>

          <Input variant="mo"
        placeholder="Nom de l'auteur du projet"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
    <br/>
       <Input
        placeholder="Date de l'édition"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
    <br/>
  <Input
        placeholder="Date de vadilité"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />


        </CardContent>
       
      </Card>
    </div>
    
  );
}
EditionProject.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditionProject);


