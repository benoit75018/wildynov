import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

function ButtonSizes(props) {
  const { classes } = props;
  return (
    <div>
      <div>

            <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.button}
            >
            REJOINDRE
            </Button>
            </div>
      </div>
  );
}


ButtonSizes.propTypes = {
    classes: PropTypes.object.isRequired
  };

  export default withStyles(styles)(ButtonSizes);