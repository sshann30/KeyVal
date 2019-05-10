import React from 'react';
import styles from './SampleComponent.scss';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "auto", margin: "auto" }}>

        <div className={classes.root}>

          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                this is the parent component
          </Typography>
            </Toolbar>
          </AppBar>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                this is the your header
              </Typography>
              <tr></tr>
              <div>
                <Fab color="primary" aria-label="add" className={classes.fab}>
                  <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="Edit" className={classes.fab}>
                  <Icon>edit_icon</Icon>
                </Fab>
                <Fab variant="extended" aria-label="Delete" className={classes.fab}>
                  <NavigationIcon className={classes.extendedIcon} />
                  Extended
                </Fab>
                <Fab disabled aria-label="Delete" className={classes.fab}>
                  <DeleteIcon />
                </Fab>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);