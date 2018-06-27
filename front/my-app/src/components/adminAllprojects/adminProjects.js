<<<<<<< HEAD
import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const drawerWidth = 240
=======
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const drawerWidth = 240;
>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
<<<<<<< HEAD
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
=======
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
<<<<<<< HEAD
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
})

function ClippedDrawer(props) {
  const { classes } = props
=======
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});



function ClippedDrawer(props) {
  const { classes } = props;
>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
<<<<<<< HEAD
          paper: classes.drawerPaper
=======
          paper: classes.drawerPaper,
>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a
        }}
      >
        <div className={classes.toolbar} />
        <Button>Membres</Button>
        <Button>Projets</Button>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography noWrap>{}</Typography>
      </main>
    </div>
<<<<<<< HEAD
  )
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ClippedDrawer)
=======
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);
>>>>>>> 66a4d17a8b1306d79c97725ea1c08f0cf8e56f0a
