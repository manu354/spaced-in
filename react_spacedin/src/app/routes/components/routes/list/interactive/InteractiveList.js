import React, {cloneElement, Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

function generate(element) {
  return [0, 1, 2].map(value =>
    cloneElement(element, {
      key: value,
    }),
  );
}

class InteractiveList extends Component {
  state = {
    dense: false,
    secondary: false,
  };

  render() {
    const {dense, secondary} = this.state;
    return (
      <div>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox color="primary"
                        checked={dense}
                        onChange={(event, checked) => this.setState({dense: checked})}
                        value="dense"
              />
            }
            label="Enable dense"
          />
          <FormControlLabel
            control={
              <Checkbox color="primary"
                        checked={secondary}
                        onChange={(event, checked) => this.setState({secondary: checked})}
                        value="secondary"
              />
            }
            label="Enable secondary text"
          />
        </FormGroup>
        <Grid className="row">
          <Grid item className="col-xs-12 col-sm-6">
            <h3 className="text-gray lighten-2 my-3">
              Text only
            </h3>
            <div className="jr-card p-0">
              <List dense={dense}>
                {generate(
                  <ListItem button>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>,
                )}
              </List>
            </div>
          </Grid>
          <Grid item className="col-xs-12 col-sm-6">
            <h3 className="text-gray lighten-2 my-3">
              Icon with text
            </h3>
            <div className="jr-card p-0">
              <List dense={dense}>
                {generate(
                  <ListItem button>
                    <ListItemIcon>
                      <FolderIcon/>
                    </ListItemIcon>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>,
                )}
              </List>
            </div>
          </Grid>
        </Grid>
        <Grid className="row">
          <Grid item className="col-xs-12 col-sm-6">
            <h3 className="text-gray lighten-2 my-3">
              Avatar with text
            </h3>
            <div className="jr-card p-0">
              <List dense={dense}>
                {generate(
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar>
                        <i className="zmdi zmdi-folder zmdi-hc-fw zmdi-hc-lg text-white"/>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>,
                )}
              </List>
            </div>
          </Grid>
          <Grid item className="col-xs-12 col-sm-6">
            <h3 className="text-gray lighten-2 my-3">
              Avatar with text and icon
            </h3>
            <div className="jr-card p-0">
              <List dense={dense}>
                {generate(
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar>
                        <i className="zmdi zmdi-folder zmdi-hc-fw zmdi-hc-lg text-white"/>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Delete">
                        <DeleteIcon/>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>,
                )}
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default InteractiveList;