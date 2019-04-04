import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SimpleDialog from './SimpleDialog';


const users = [
  {image: 'https://via.placeholder.com/150x150', email: 'jhonsmith@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'stella02@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris0254@example.com'}];


class SimpleDialogDemo extends Component {

  state = {
    open: false,
    selectedValue: users[1].email,
  };
  handleRequestClose = value => {
    this.setState({selectedValue: value, open: false});
  };

  render() {
    return (
      <div>
        <Typography variant="subheading">
          Selected: {this.state.selectedValue}
        </Typography>
        <br/>
        <Button variant="contained" className="bg-primary text-white" onClick={() => this.setState({open: true})}>Open
          simple dialog</Button>
        <SimpleDialog users={users}
                      selectedValue={this.state.selectedValue}
                      open={this.state.open}
                      onClose={this.handleRequestClose.bind(this)}
        />
      </div>
    );
  }
}

export default SimpleDialogDemo;