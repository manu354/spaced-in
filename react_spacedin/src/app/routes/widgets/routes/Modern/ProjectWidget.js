import React from "react";
import Avatar from '@material-ui/core/Avatar';


import Widget from "components/Widget/index";


const ProjectWidget = () => {
  return (
    <Widget>
      <div className="d-flex flex-row">
        <h4>Project Widget</h4>
        <ul className="list-inline ml-auto mb-0">
          <li className="list-inline-item"><i className="zmdi zmdi-alert-circle pointer"/></li>
          <li className="list-inline-item"><i className="zmdi zmdi-pin pointer"/></li>
          <li className="list-inline-item">
            <a className="dropdown-link" href="#/">
              <i className="zmdi zmdi-chevron-down"/>
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center py-3">
        <Avatar className="size-60 mb-3 mx-auto" src={require("assets/images/widget/birds.png")}/>

        <h2 className="mb-4">Eagal Hunt App</h2>

        <ul className="list-inline mb-3 mb-lg-4">
          <li className="list-inline-item mr-0 mb-2 align-top"><Avatar className="size-30"
                                                                       src="https://via.placeholder.com/150x150"/>
          </li>
          <li className="list-inline-item mr-0 mb-2 align-top"><Avatar className="size-30"
                                                                       src="https://via.placeholder.com/150x150"/>
          </li>
          <li className="list-inline-item mr-0 mb-2 align-top"><Avatar
            className="size-30 bg-primary jr-fs-md text-white">Ms</Avatar></li>
          <li className="list-inline-item mr-0 mb-2 align-top"><span
            className="size-30 rounded-circle border border-grey text-grey d-block"><i
            className="zmdi zmdi-plus"/></span></li>
        </ul>
        <button className="btn btn-primary text-white">Go to project</button>
      </div>
    </Widget>
  );
};

export default ProjectWidget;
