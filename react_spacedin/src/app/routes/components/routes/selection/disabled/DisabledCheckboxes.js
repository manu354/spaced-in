import React, {Component} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class DisabledCheckboxes extends Component {
  state = {
    checkedA: true,
    checkedB: false,
    checkedC: false,
  };

  handleChange = name => (event, checked) => {
    this.setState({[name]: checked});
  };

  render() {
    return (
      <FormGroup>
        <FormControlLabel
          disabled
          control={
            <Checkbox color="primary"
                      checked={this.state.checkedA}
                      onChange={this.handleChange('checkedA')}
                      value="checkedA"
            />
          }
          label="Selected Disabled"
        />
        <FormControlLabel
          disabled
          control={
            <Checkbox color="primary"
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="Unselected Disabled"
            />
          }
          label="Unselected Disabled"
        />
        <FormControlLabel
          disabled
          control={
            <Checkbox color="primary"
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedC')}
                      value="Disabled"
            />
          }
          label="Disabled"
        />
      </FormGroup>
    );
  }
}

export default DisabledCheckboxes;
