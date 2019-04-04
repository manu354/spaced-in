import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';


class SimpleDialog extends Component {
  handleRequestClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const {classes, users, onClose, selectedValue, ...other} = this.props;

    return (
      <Dialog onClose={this.handleRequestClose} {...other}>
        <DialogTitle>Set backup account</DialogTitle>
        <div>
          <List>
            {users.map(user =>
              <ListItem button onClick={() => this.handleListItemClick(user.email)} key={user.email}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={user.image}/>
                </ListItemAvatar>
                <ListItemText primary={user.email}/>
              </ListItem>,
            )}
            <ListItem button onClick={() => this.handleListItemClick('addAccount')}>
              <ListItemAvatar>
                <Avatar>
                  <AddIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Add Account"/>
            </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};
export default SimpleDialog;
