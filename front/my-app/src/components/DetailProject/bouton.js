import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios"
const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class ButtonSizes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userID:[]
    }
  }

    componentDidMount() {
      axios
        .post(
          `http://localhost:8080/projets/ProjetJoin/:projectId`
          .then(response => {
            localStorage.setItem('token', response.data.token);
            window.axios.defaults.headers.common['x-acces-token'] = 'Bearer ' + localStorage.getItem('token');
          })
        )
      }
    

  render(){
  return (
    <div>
      <div>

            <Button
            variant="contained"
            size="large"
            color="primary"
            className=""
            >
            REJOINDRE
            </Button>
            </div>
      </div>
  );

}

}


// ButtonSizes.propTypes = {
//     classes: PropTypes.object.isRequired
//   };

  export default withStyles(styles)(ButtonSizes);