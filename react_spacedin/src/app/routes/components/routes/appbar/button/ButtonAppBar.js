import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchBox from 'components/SearchBox';
import {Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap';

class ButtonAppBar extends React.Component {

  onSearchBoxSelect = () => {
    this.setState({
      searchBox: !this.state.searchBox
    })
  };
  handleRequestClose = () => {
    this.setState({mailNotification: false, appNotification: false, searchBox: false});
  };

  constructor() {
    super();
    this.state = {
      searchBox: false,
      searchText: '',
    }
  }

  updateSearchText(evt) {
    this.setState({
      searchText: evt.target.value,
    });
  }

  render() {
    return (
      <AppBar className="app-main-header jr-border-radius" position="static">
        <Toolbar>
          <IconButton className="jr-menu-icon" aria-label="Menu">
            <span className="menu-icon"/>
          </IconButton>
          <h4 className="mb-0 mr-auto text-white">Company Name</h4>

          <SearchBox styleName="d-none d-sm-block"/>

          <div className="d-inline-block d-sm-none list-inline-item">
            <Dropdown
              className="quick-menu nav-searchbox"
              isOpen={this.state.searchBox}
              toggle={this.onSearchBoxSelect.bind(this)}>

              <DropdownToggle
                className="d-inline-block"
                tag="span"
                data-toggle="dropdown">
                <IconButton className="icon-btn size-30">
                  <i className="zmdi zmdi-search zmdi-hc-fw"/>
                </IconButton>
              </DropdownToggle>

              <DropdownMenu right className="p-0">
                <SearchBox styleName="search-dropdown" placeholder=""
                           onChange={this.updateSearchText.bind(this)}
                           value={this.state.searchText}/>
              </DropdownMenu>
            </Dropdown>
          </div>

          <Button size="small" className="ml-3 text-white d-none d-sm-block">Login</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default ButtonAppBar;