import React from 'react';
import {ButtonDropdown, ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import Button from '@material-ui/core/Button';
import SiteVisit from "./SiteVisit";

class NestedButtonGroup extends React.Component {
    toggle = () => {
        this.setState({
            dropDownOpen: !this.state.dropDownOpen
        })
    };

    constructor() {
        super();
        this.state = {
            dropDownOpen: false
        };
    }

    render() {
        return (
            <ButtonGroup vertical={this.props.isVertical}>
                <Button onClick={() => {
                    (async () => {
                        const rawResponse = await fetch('/spaceout', {
                            method: 'POST',
                            redirect: "follow",
                            credentials: "same-origin",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({uname: localStorage.getItem('user_name')} )
                        });
                        console.log(rawResponse);

                        const content = await rawResponse.json();
                        sessionStorage.clear();
                        window.location.reload();
                        console.log(content)
                    })();

                }} color="primary" variant ="contained">
                    GO
                </Button>
            </ButtonGroup>
        );
    };
}

export default NestedButtonGroup;