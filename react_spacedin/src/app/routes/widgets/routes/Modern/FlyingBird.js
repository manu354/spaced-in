import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AutoComplete from 'components/autoSearch/IntegrationReactSelect'
import Widget from "components/Widget/index";


const FlyingBird = () => {
	return (
		<Widget>
			<div className="media align-items-center mb-4">
				<div className="mr-3">
					<img src={require("assets/images/widget/flying.png")} alt="flying"/>
				</div>
				<div className="media-body">
					<h2 className="mb-0">
						Enter a Topic to Revise
					</h2>
					<p className="text-grey mb-0">Entered information will be added to your Google calendar</p>
				</div>
			</div>
			<AutoComplete/>
			<form className="mt-lg-3">
				<Button variant="contained" color="primary" className="mb-0 text-capitalize" htmltype="submit">
					Subscribe
				</Button>
			</form>
		</Widget>
	);
};

export default FlyingBird;
