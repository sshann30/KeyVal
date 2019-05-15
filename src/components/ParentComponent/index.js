import React from 'react';
import KeyValue from '../KeyValue/index'
import styles from './ParentComponent.scss';

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

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        id: 0,
        key: '',
        value: ''
      }],
    };

  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.handleJSONBuilder(this.state.data)
    this.setState({
      data: [{
        idx: 0,
        key: '',
        value: ''
      }],
    });
  }

  handleJSONBuilder = (data) => {
    const jsonObj = {};
    data.forEach(item => {
      jsonObj[item.key] = item.value
    });
    console.log(JSON.stringify(jsonObj))
  }

  handleChange = (event) => {
    let { name, value, id } = event.target;
    const newState = this.state.data;
    newState[id][name] = value,
      this.setState({
        data: newState
      });
  }

  handleAdd = (event) => {
    let num = this.state.data.length
    const newState = this.state.data;
    const added = [...newState, { id: num, key: '', value: '' }]
    this.setState({
      data: added
    });
  }

  handleDelete = (event) => {
    let id = event.target.value;
    const newState = this.state.data;
    let removed = newState.length > 1 ?
      newState.filter(item => item.id !== parseInt(id)) :
      [{ id: 0, key: '', value: '' }]
    this.setState({
      data: removed
    });
  }

  render() {
    return (

      <div className={styles.parentComp}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Material UI Shopping List
          </Typography>
          </Toolbar>
        </AppBar>

        {/* <List component="nav" className={classes.root} >
            <ListItem button >
              <ListItemText primary="Add an item to the list" />
              <Fab size="small" color="secondary" aria-label="Add" className={classes.margin} 
              onclick='duplicate()'>
                <AddIcon onclick='duplicate()'/>
              </Fab>
            </ListItem>
            <Divider /> */}

        <div className={styles.form}>
          <p className={styles.header_info}>This is your header</p>
          <button className={styles.add_btn} onClick={this.handleAdd}>+</button>


          {this.state.data ? this.state.data.map((item, idx) =>
            <React.Fragment key={idx}>
              <KeyValue
                value={this.state.data[idx]}
                onChange={this.handleChange}
                onDelete={this.handleDelete}
                formIdx={idx}
              />
            </React.Fragment>)
            :
            undefined
          }
          <button className={styles.sub_btn} onClick={this.handleSubmit}>Submit</button>

      {/* <ListItem style={{justifyContent: 'center'}}>
              <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
                <NavigationIcon className={classes.extendedIcon} onClick={this.handleSubmit}/>
                Submit
              </Fab>
          </ListItem>
            
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Click "submit" to see list items saved in console
              </Typography>
            </Toolbar>
          </AppBar> */}
        </div>

      </div>
    );
  }
}

export default ParentComponent;
