import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

const lists = [
  {id: 1, icon: 'facebook', name: 'Facebook', color: 'primary'},
  {id: 2, icon: 'apple', name: 'Apple', color: 'info'},
  {id: 3, icon: 'github', name: 'GitHub', color: 'secondary'},
  {id: 4, icon: 'google-maps', name: 'Google Map', color: 'warning'},
  {id: 5, icon: 'instagram', name: 'Instagram', color: 'danger'}];

class RightIconList extends Component {
  render() {
    return (
      <List className="pb-0">
        {lists.map(item =>
          <div style={{borderBottom: 1, borderBottomColor: 'red'}} key={item.id}>
            <ListItem style={{borderBottom: 1, borderBottomColor: 'red'}} button key={item.id}
                      onClick={event => this.handleToggle(event, item.id)}>
              <ListItemText primary={item.name}/>
              <ListItemSecondaryAction>
                <IconButton className="size-30">
                  <i className={`zmdi zmdi-${item.icon} zmdi-hc-fw text-${item.color}`}/>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider light/>
          </div>
        )}
      </List>
    );
  }
}

export default RightIconList;