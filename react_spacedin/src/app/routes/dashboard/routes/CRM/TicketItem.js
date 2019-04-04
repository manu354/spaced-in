import React from "react";
import Avatar from '@material-ui/core/Avatar';

import Aux from "util/Auxiliary";
import {taskStatus} from "./data";

const getStatus = (status) => {
  const statusData = taskStatus.filter((taskStatus, index) => status === taskStatus.id)[0];
  return <Aux>
    <span className="jr-nonhover"><i className={`zmdi zmdi-circle jr-fs-sm text-${statusData.color}`}/></span>
    <span className={`badge jr-hover mb-0 text-white badge-${statusData.color}`}>
      {statusData.title}
    </span>
  </Aux>
};

const TicketItem = ({data}) => {

  const {id, title, avatar, description, status} = data;
  return (
    <div key={"TicketItem" + id} className="media jr-task-list-item flex-nowrap">
      <Avatar className="mr-3 size-36" src={avatar}/>
      <div className="media-body jr-task-item-content">
        <div className="jr-task-item-content-left">
          <h5 className="text-truncate jr-task-item-title mb-1">{title}</h5>
          <p key={id} className="text-grey jr-fs-sm mb-0">{description}</p>
        </div>
        <div className="jr-task-item-content-right">
          {getStatus(status)}
        </div>
      </div>
    </div>

  );
};

export default TicketItem;
