import React, {Component} from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

class ComposedTextField extends Component {
  state = {
    name: 'Composed TextField',
  };

  handleChange = event => {
    this.setState({name: event.target.value});
  };

  render() {

    return (
      <div className="row">
        <div className="col-md-3">
          <FormControl className="mb-3" fullWidth>
            <InputLabel htmlFor="name-simple">Name</InputLabel>
            <Input id="nameSimple" value={this.state.name} onChange={this.handleChange}/>
          </FormControl>
        </div>
        <div className="col-md-3">
          <FormControl className="mb-3" fullWidth>
            <InputLabel htmlFor="name-helper">Name</InputLabel>
            <Input id="nameHelper" value={this.state.name} onChange={this.handleChange}/>
            <FormHelperText>Some important helper text</FormHelperText>
          </FormControl>
        </div>
        <div className="col-md-3">
          <FormControl className="mb-3" fullWidth>
            <InputLabel htmlFor="name-disabled">Name</InputLabel>
            <Input id="name22" value={this.state.name} onChange={this.handleChange}/>
            <FormHelperText>Some important helper text</FormHelperText>
          </FormControl>
        </div>
        <div className="col-md-3">
          <FormControl className="mb-3" fullWidth>
            <InputLabel htmlFor="name-error">Name</InputLabel>
            <Input id="nameError" value={this.state.name} onChange={this.handleChange}/>
            <FormHelperText>Some important helper text</FormHelperText>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default ComposedTextField;