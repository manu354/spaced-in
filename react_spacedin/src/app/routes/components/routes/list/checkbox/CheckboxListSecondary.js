import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

const users = [
  {id: 1, image: 'https://via.placeholder.com/150x150', email: 'jhonsmith@example.com'},
  {id: 2, image: 'https://via.placeholder.com/150x150', email: 'stella02@example.com'},
  {id: 3, image: 'https://via.placeholder.com/150x150', email: 'chrris0254@example.com'}];

class CheckboxListSecondary extends Component {
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
          <ListItem button key={user.email}>
            <Avatar className="size-50" alt="Remy Sharp" src={user.image}/>
            <ListItemText className="br-break" primary={user.email}/>
            <ListItemSecondaryAction>
              <Checkbox color="primary"
                        onClick={event => this.handleToggle(event, user.id)}
                        checked={this.state.checked.indexOf(user.id) !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>,
        )}
      </List>
    );
  }
}

export default CheckboxListSecondary;