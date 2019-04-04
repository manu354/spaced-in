import React, {Component} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';


class ErrorMessage extends Component {
    state = {
        value: '',
    };

    handleChange = (event, value) => {
        this.setState({value});
    };


    render() {
        return (

            <FormControl component="fieldset" required>
                <FormHelperText className="text-grey">Storage In Basic Plan</FormHelperText>
                <RadioGroup
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <FormControlLabel value="gb1" control={<Radio color="primary"/>} label="1 GB"/>
                    <FormControlLabel value="gb5" control={<Radio color="primary"/>} label="5 GB"/>
                    <FormControlLabel value="gb50" control={<Radio color="primary"/>} label="50 GB"/>
                </RadioGroup>
                <FormHelperText className="text-danger">Your error message goes here.</FormHelperText>
            </FormControl>

        );
    }
}

export default ErrorMessage;
