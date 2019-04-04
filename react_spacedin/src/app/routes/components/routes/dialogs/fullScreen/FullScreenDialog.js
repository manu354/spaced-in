import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        <Button variant="contained" className="bg-primary text-white" onClick={this.handleClickOpen}>full-screen
          dialog</Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleRequestClose}
          TransitionComponent={Transition}
        >
          <AppBar className="position-relative">
            <Toolbar>
              <IconButton onClick={this.handleRequestClose} aria-label="Close">
                <CloseIcon/>
              </IconButton>
              <Typography variant="title" color="inherit" style={{
                flex: 1,
              }}>
                Sound
              </Typography>
              <Button onClick={this.handleRequestClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania"/>
            </ListItem>
            <Divider/>
            <ListItem button>
              <ListItemText primary="Default notification ringtone" secondary="Tethys"/>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default FullScreenDialog;