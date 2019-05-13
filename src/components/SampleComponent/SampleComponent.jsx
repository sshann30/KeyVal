import React from 'react';
import styles from './SampleComponent.scss';
import Types from 'prop-types';
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
import Button from '@material-ui/core/Button';



// document.getElementById('AddIcon').onclick = duplicate;

// var i = 0;
// var original = document.getElementById('duplicater');

// function duplicate() {
//     var clone = original.cloneNode(true); // "deep" clone
//     clone.id = "duplicater" + ++i; // there can only be one element with an ID
//     original.parentNode.appendChild(clone);
// }

function removeItem(){
	
}


function SimpleAppBar(props) {
  const { classes } = props;

  return (

    <div style={{ display: "block" }}>

      <div style={{ width: "auto", margin: "auto" }}>

        <br></br>

        <div className={classes.root}>

          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Material UI Shopping List
          </Typography>
            </Toolbar>
          </AppBar>


          <List component="nav" className={classes.root} >
            <ListItem button >
              <ListItemText primary="Add an item to the list" />
              <Fab size="small" color="secondary" aria-label="Add" className={classes.margin} 
              onclick='duplicate()'>
                <AddIcon onclick='duplicate()'/>
              </Fab>
            </ListItem>
            <Divider />

          <div id="duplicater"> 
            <ListItem button divider>
              <TextField
                id="standard-key-input"
                label="Item"
                className={classes.textField}
                type="key"
                autoComplete="current-key"
                margin="normal"
                
              />

              &nbsp;

              <TextField
                id="standard-quantity-input"
                label="Quantity"
                className={classes.textField}
                type="quantity"
                autoComplete="current-quantity"
                margin="normal"
                
              />
              <IconButton aria-label="Delete" className={classes.margin}
              onclick="removeItem()">
                <DeleteIcon />
              </IconButton>
            </ListItem>
          </div>

            <ListItem style={{justifyContent: 'center'}}>
              <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
                <NavigationIcon className={classes.extendedIcon} />
                Submit
              </Fab>
            </ListItem>
            <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Click "submit" to see list items saved in console
          </Typography>
            </Toolbar>
          </AppBar>

            <Divider />
          </List>

        </div>
      </div>

    </div>
  );
}



export default withStyles(styles)(SimpleAppBar);