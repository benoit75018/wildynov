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

function Membres(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;
  console.log(classes.card)

  return (
    <div className="membres">
      <Card className={classes.card}>
        <CardContent>
                <Typography variant="title" gutterBottom>
                Membres de l'équipe
            </Typography> 
                <Typography className={classes.pos} color="textSecondary">  
            </Typography>
                <Input variant="mo"
                placeholder="NOM"
                className={classes.input}
                inputProps={{
                'aria-label': 'Description',
                }}
            />
            <Input
                placeholder="Prénom"
                className={classes.input}
                inputProps={{
                'aria-label': 'Description',
                }}
            />
                            <Input variant="mo"
                placeholder="NOM"
                className={classes.input}
                inputProps={{
                'aria-label': 'Description',
                }}
            />
            <Input
                placeholder="Prénom"
                className={classes.input}
                inputProps={{
                'aria-label': 'Description',
                }}
            />                  <Input variant="mo"
            placeholder="NOM"
            className={classes.input}
            inputProps={{
            'aria-label': 'Description',
            }}
        />
        <Input
            placeholder="Prénom"
            className={classes.input}
            inputProps={{
            'aria-label': 'Description',
            }}
        />
                        <Input variant="mo"
                placeholder="NOM"
                className={classes.input}
                inputProps={{
                'aria-label': 'Description',
                }}
            />
            <Input
                placeholder="Prénom"
                className={classes.input}
                inputProps={{
                'aria-label': 'Description',
                }}
            />
                            <Input variant="mo"
                placeholder="NOM"
                className={classes.input}
                inputProps={{
                'aria-label': 'Description',
                }}
            />
            <Input
                placeholder="Prénom"
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
Membres.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Membres);

