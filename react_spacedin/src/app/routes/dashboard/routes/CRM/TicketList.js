import React from "react";

import Widget from "components/Widget";
import {ticketList} from "./data";
import TicketItem from "./TicketItem";

class TicketList extends React.Component {

  render() {
    return (
      <Widget styleName="jr-card-ticketlist">
        <div className="d-flex flex-row mb-3">
          <h4 className="mb-1"> Recent Tickets</h4>
          <span className="text-primary font-weight-medium mb-0 pointer ml-auto d-none d-sm-block">See all tickets  <i
            className="zmdi zmdi-long-arrow-right jr-fs-xxl ml-2 d-inline-block align-middle"/> </span>
        </div>
        {
          ticketList.map((ticket, index) => <TicketItem key={ticket.id} data={ticket}/>)
        }
        <span className="text-primary font-weight-medium mb-0 pointer d-block d-sm-none">See all tickets  <i
          className="zmdi zmdi-long-arrow-right jr-fs-xxl ml-2 d-inline-block align-middle"/> </span>
      </Widget>
    );
  }
}


export default TicketList;
