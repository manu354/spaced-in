import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import {Badge} from 'reactstrap';

const users = [
  {id: 1, image: 'https://via.placeholder.com/150x150', email: 'henrric@example.com'},
  {id: 2, image: 'https://via.placeholder.com/150x150', email: 'stella02@example.com'},
  {id: 3, image: 'https://via.placeholder.com/150x150', email: 'chrris@example.com'},
  {id: 4, image: 'https://via.placeholder.com/150x150', email: 'jhonson@example.com'},
  {id: 5, image:'https://via.placeholder.com/150x150', email: 'domnic@example.com'}];

class CheckBoxListControl extends Component {
  state = {
    checked: [1],
  };

  handleToggle = (event, value) => {
    const {checked} = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    return (
      <List>
        {users.map(user =>
          <ListItem button key={user.email} onClick={event => this.handleToggle(event, user.id)}>
            <Avatar alt="Remy Sharp" src={user.image}/>
            <ListItemText className="br-break" primary={user.email} secondary="Nov 8, 2017"/>
            <Badge className="mr-4 mt-2 text-uppercase" color="success" pill>Agent</Badge>
            <ListItemSecondaryAction>
              <Checkbox color="primary"
                        checked={this.state.checked.indexOf(user.id) !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>,
        )}
      </List>
    );
  }
}

export default CheckBoxListControl;