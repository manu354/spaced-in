import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';

class FadeSnackbar extends Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({open: true});
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClick}><span>Fade</span></Button>
        <Snackbar
          open={this.state.open}
          onClose={this.handleRequestClose}
          TransitionComponent={Fade}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">I love snacks</span>}
        />
      </div>
    );
  }
}

export default FadeSnackbar;