import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

function InsetDividers() {
  return (
    <List>
      <ListItem button>
        <Avatar className="size-50">
          <i className="zmdi zmdi-collection-folder-image zmdi-hc-fw text-white"/>
        </Avatar>
        <ListItemText primary="Work" secondary="Jan 28, 2017"/>
      </ListItem>
      <Divider inset/>
      <ListItem button>
        <Avatar className="size-50">
          <i className="zmdi zmdi-collection-case-play zmdi-hc-fw text-white"/>
        </Avatar>
        <ListItemText primary="Private" secondary="Nov 20, 2017"/>
      </ListItem>
      <Divider inset/>
      <ListItem button>
        <Avatar className="size-50">
          <i className="zmdi zmdi-coffee zmdi-hc-fw text-white"/>
        </Avatar>
        <ListItemText primary="Meetings" secondary="Dec 02, 2014"/>
      </ListItem>
    </List>
  );
}

export default (InsetDividers);