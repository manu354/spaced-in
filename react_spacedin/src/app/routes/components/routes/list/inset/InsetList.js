import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

function InsetList() {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <i className="zmdi zmdi-email zmdi-hc-fw zmdi-hc-2x"/>
        </ListItemIcon>
        <ListItemText primary="Inbox"/>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <i className="zmdi zmdi-mail-send zmdi-hc-fw zmdi-hc-2x"/>
        </ListItemIcon>
        <ListItemText primary="Sent"/>
      </ListItem>

      <ListItem button>
        <ListItemText className="ml-5 pl-2" primary="Spam (10)"/>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <i className="zmdi zmdi-star zmdi-hc-fw zmdi-hc-2x"/>
        </ListItemIcon>
        <ListItemText primary="Starred"/>
      </ListItem>

      <ListItem button>
        <ListItemText className="ml-5 pl-2" primary="Trash"/>
      </ListItem>
    </List>
  );
}

export default InsetList;