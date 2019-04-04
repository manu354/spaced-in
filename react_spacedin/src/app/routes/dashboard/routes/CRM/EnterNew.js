import React from "react";
import Button from '@material-ui/core/Button';
import AutoComplete from 'components/autoSearch/IntegrationReactSelect'
import Widget from "components/Widget/index";
import TextField from '@material-ui/core/TextField';

class EnterNew extends React.Component {

    constructor() {
        super();
        this.state = {
            desc: '',
            title: '',
        }
    }

    render() {
        const {
            desc,
            title
        } = this.state;
        var bigboy = this;

        return (
            <Widget>
                <div className="media align-items-center mb-4">
                    <div className="mr-3 logo-60">
                        <img src={require("assets/images/widget/flying-bg.png")} alt="flying"/>
                    </div>
                    <div className="media-body">
                        <h2 className="mb-0">
                            Enter a Topic to Revise
                        </h2>
                        <p className="text-grey mb-0">Entered information will be added to your Google calendar</p>
                    </div>
                </div>
                <TextField onChange={(event) => this.setState({title: event.target.value})}
                              placeholder="Enter the Topic's Title"/>
                <TextField onChange={(event) => this.setState({desc: event.target.value})}
                              placeholder="Enter a Description"/>
                <form className="mt-lg-3" method="post" action="/enternew">
                    <Button variant="contained" color="primary" className="mb-0 text-capitalize" style={{margin: 20}} onClick={() => {
                        (async () => {
                            console.log("OOOF", desc, title);
                            const rawResponse = await fetch('/enternew', {
                                method: 'POST',
                                redirect: "follow",
                                credentials: "same-origin",
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    uname: localStorage.getItem('user_name'),
                                    desc: desc,
                                    title: title
                                })
                            });
                            console.log(rawResponse);

                            const content = await rawResponse.json();

                        })();

                    }}>
                        Enter
                    </Button>
                </form>
            </Widget>
        );
    }


}

export default EnterNew;
