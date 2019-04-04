import React from 'react';
import CustomScrollbars from 'util/CustomScrollbars';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

const lists = [
  {
    headerId: 0,
    heading: 'Components',
    items: [
      {id: 1, icon: 'label', name: 'Label', color: 'primary'},
      {id: 2, icon: 'layers', name: 'Layer', color: 'info'},
      {id: 3, icon: 'lamp', name: 'Lamp', color: 'secondary'},
    ]
  },
  {
    headerId: 1,
    heading: 'Movies',
    items: [
      {id: 4, icon: 'movie', name: 'Movie', color: 'warning'},
      {id: 5, icon: 'puzzle-piece', name: 'Puzzle', color: 'danger'}
    ]
  }, {
    headerId: 2,
    heading: 'Social',
    items: [
      {id: 6, icon: 'facebook', name: 'Facebook', color: 'primary'},
      {id: 7, icon: 'google-earth', name: 'Google Eearth', color: 'danger'},
      {id: 8, icon: 'twitter', name: 'twitter', color: 'blue'}
    ]
  }
];


class PinnedSubheaderList extends React.Component {
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
      <List className="pinned-list" subheader={<div/>}>
        <CustomScrollbars className="scrollbar" style={{height: '100%'}}>
          {lists.map((listItem) => (
            <div key={`section-${listItem.headerId}`}>
              <ListSubheader className="text-muted bg-grey lighten-4">{listItem.heading}</ListSubheader>
              {listItem.items.map(item => (
                <ListItem button key={`section-${listItem.headerId}-${item.id}`}
                          onClick={event => this.handleToggle(event, item.id)}>
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
                </ListItem>
              ))}
            </div>
          ))}
        </CustomScrollbars>
      </List>
    );
  }
}


export default PinnedSubheaderList;