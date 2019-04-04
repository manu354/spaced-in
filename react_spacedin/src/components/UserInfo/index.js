import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import {connect} from 'react-redux'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {userSignOut} from 'actions/Auth';
import IntlMessages from 'util/IntlMessages';

class UserInfo extends React.Component {

  state = {
    anchorEl: null,
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

      </div>
    );
  }
}

const mapStateToProps = ({settings}) => {
  const {locale} = settings;
  return {locale}
};
export default connect(mapStateToProps, {userSignOut})(UserInfo);


