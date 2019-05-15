import React from 'react';
import styles from './KeyValue.scss';
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

class KeyValue extends React.Component {
  render() {
    return (
      <div>
        <ListItem button divider style={{justifyContent: 'center'}}>
          <TextField
            id={this.props.formIdx}
            type='text'
            name='key'
            placeholder='Item'
            value={this.props.value.key}
            onChange={this.props.onChange}
          />
           &nbsp;
          <TextField
            id={this.props.formIdx}
            type='text'
            name='value'
            placeholder='Quantity'
            value={this.props.value.value}
            onChange={this.props.onChange}
          />
          <IconButton aria-label="Delete" value={this.props.formIdx} onClick={this.props.onDelete}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      </div>
    );
  }
}

export default KeyValue;
