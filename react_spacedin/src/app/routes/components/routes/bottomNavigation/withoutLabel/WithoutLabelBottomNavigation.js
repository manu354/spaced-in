import React, {Component} from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class WithoutLabelBottomNavigation extends Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({value});
  };

  render() {
    const {value} = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange}
                        className={'flex-wrap bottom-navigation'}>
        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon/>}/>
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon/>}/>
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon/>}/>
      </BottomNavigation>
    );
  }
}

export default WithoutLabelBottomNavigation;