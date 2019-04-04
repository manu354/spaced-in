import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import SideNavOption from './SideNavOption';
import {changeDirection, setDarkTheme, setThemeColor} from 'actions/index';
import {
  AMBER,
  BLUE,
  CYAN,
  DARK_AMBER,
  DARK_BLUE,
  DARK_CYAN,
  DARK_DEEP_ORANGE,
  DARK_DEEP_PURPLE,
  DARK_GREEN,
  DARK_INDIGO,
  DARK_PINK,
  DEEP_ORANGE,
  DEEP_PURPLE,
  GREEN,
  INDIGO,
  PINK
} from 'constants/ThemeColors';

class ColorOption extends React.Component {

  toggleCustomizer = () => {
    this.setState({drawerStatus: !this.state.drawerStatus});
  };
  closeCustomizer = () => {
    this.setState({drawerStatus: false});
  };
  handleThemeColor = (colorCode) => {
    this.props.setThemeColor(colorCode);
    const body = document.body.classList;
    body.remove(this.props.themeColor);
    body.remove('dark-theme');
    body.add(colorCode);
  };
  handleDarkTheme = () => {
    this.props.setDarkTheme();
    const body = document.body.classList;
    body.toggle(this.props.themeColor);
    body.toggle('dark-theme');
  };

  constructor() {
    super();
    this.state = {drawerStatus: false}
  }

  componentDidMount() {
    document.body.classList.add(this.props.themeColor);
  }

  render() {
    const {themeColor, darkTheme, isDirectionRTL} = this.props;
    return (

      <div>

      </div>
    );
  }
}

const mapStateToProps = ({settings}) => {
  const {themeColor, darkTheme, isDirectionRTL} = settings;
  return {themeColor, darkTheme, isDirectionRTL}
};

export default withRouter(connect(mapStateToProps, {setThemeColor, setDarkTheme, changeDirection})(ColorOption));

