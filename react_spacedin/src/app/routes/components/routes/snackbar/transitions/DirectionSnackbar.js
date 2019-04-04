import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

function TransitionLeft(props) {
  return <Slide {...props} direction="left"/>;
}

function TransitionUp(props) {
  return <Slide {...props} direction="up"/>;
}

function TransitionRight(props) {
  return <Slide {...props} direction="right"/>;
}

function TransitionDown(props) {
  return <Slide {...props} direction="down"/>;
}

class DirectionSnackbar extends React.Component {
  state = {
    open: false,
    Transition: null,
  };

  handleClick = Transition => () => {
    this.setState({open: true, Transition});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        <Button variant="contained" className="mb-1 mr-3" color="primary"
                onClick={this.handleClick(TransitionLeft)}>
          <i className="zmdi zmdi-long-arrow-right zmdi-hc-fw "/><span>Right</span>
        </Button>

        <Button variant="contained" className="mb-1 mr-3" color="primary" onClick={this.handleClick(TransitionUp)}>
          <i className="zmdi zmdi-long-arrow-up zmdi-hc-fw "/><span>Up</span>
        </Button>

        <Button variant="contained" className="mb-1 mr-3" color="primary"
                onClick={this.handleClick(TransitionRight)}>
          <i className="zmdi zmdi-long-arrow-left zmdi-hc-fw "/>
          <span>Left</span>
        </Button>

        <Button variant="contained" color="primary" onClick={this.handleClick(TransitionDown)}>
          <i className="zmdi zmdi-long-arrow-down zmdi-hc-fw "/><span>Down</span>
        </Button>
        <Snackbar
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={this.state.Transition}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">I love snacks</span>}
        />
      </div>
    );
  }
}

export default DirectionSnackbar;
