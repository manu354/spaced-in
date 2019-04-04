import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

const lists = [
  {id: 1, icon: 'label', name: 'Label', color: 'primary'},
  {id: 2, icon: 'layers', name: 'Layer', color: 'info'},
  {id: 3, icon: 'lamp', name: 'Lamp', color: 'secondary'},
  {id: 4, icon: 'movie', name: 'Movie', color: 'warning'},
  {id: 5, icon: 'puzzle-piece', name: 'Puzzle', color: 'danger'}];

class CheckboxList extends Component {
  state = {
    checked: [0],
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
        {lists.map(item =>
          <ListItem button key={item.id} onClick={event => this.handleToggle(event, item.id)}>
            <Checkbox color="primary"
                      checked={this.state.checked.indexOf(item.id) !== -1}
                      tabIndex="-1"
            />

            <ListItemText primary={item.name}/>
            <ListItemSecondaryAction>
              <IconButton>
                <i className={`zmdi zmdi-${item.icon} text-${item.color}`}/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>,
        )}
      </List>
    );
  }
}

export default CheckboxList;