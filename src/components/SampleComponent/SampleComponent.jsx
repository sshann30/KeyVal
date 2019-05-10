import React from 'react';
import styles from './SampleComponent.scss';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

function SimpleAppBar(props) {
  const { classes } = props;

  return (

    <div style={{ display: "flex" }}>

      <div style={{ width: "auto", margin: "auto" }}>

        <br></br>

        <div className={classes.root}>

          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                This is the parent component
          </Typography>
            </Toolbar>
          </AppBar>


          <List component="nav" className={classes.root}>
            <ListItem button>
              <ListItemText primary="This is your header" />
              <Fab size="small" color="secondary" aria-label="Add" className={classes.margin}>
                <AddIcon />
              </Fab>
            </ListItem>
            <Divider />

            <ListItem button divider>
              <TextField
                id="standard-key-input"
                label="Key"
                className={classes.textField}
                type="key"
                autoComplete="current-key"
                margin="normal"
              />

              &nbsp;
              
              <TextField
                id="standard-value-input"
                label="Value"
                className={classes.textField}
                type="value"
                autoComplete="current-value"
                margin="normal"
              />
              <IconButton aria-label="Delete" className={classes.margin}>
                <DeleteIcon />
              </IconButton>

            </ListItem>

          </List>

        </div>
      </div>

    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);