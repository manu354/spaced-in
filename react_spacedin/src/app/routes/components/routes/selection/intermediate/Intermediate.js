import React, {Component} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';

class Intermediate extends Component {
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
          control={
            <Checkbox color="primary"
                      checked={this.state.checkedA}
                      onChange={this.handleChange('checkedA')}
                      value="checkedA"
                      indeterminate
            />
          }
          label="Item Name"
        />
        <Divider light/>
        <FormControlLabel
          control={
            <Checkbox color="primary"
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      indeterminate
            />
          }
          label="Burger"
        />

        <FormControlLabel
          control={
            <Checkbox color="primary"
                      checked={this.state.checkedC}
                      onChange={this.handleChange('checkedC')}
                      value="checkedC"
                      indeterminate
            />
          }
          label="Doughnut"
        />

      </FormGroup>
    );
  }
}

export default Intermediate;
