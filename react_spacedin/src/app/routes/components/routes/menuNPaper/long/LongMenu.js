import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];


class LongMenu extends Component {
  state = {
    anchorEl: undefined,
    open: false,
  };

  handleClick = event => {
    this.setState({open: true, anchorEl: event.currentTarget});
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={this.state.open ? 'long-SidenavContent.js' : null}
          aria-haspopup
          onClick={this.handleClick}
        >
          <MoreVertIcon/>
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onClose={this.handleRequestClose}
          MenuListProps={{
            style: {
              width: 200,
            },
          }}
        >
          {options.map(option =>
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleRequestClose}>
              {option}
            </MenuItem>,
          )}
        </Menu>
      </div>
    );
  }
}

export default LongMenu;