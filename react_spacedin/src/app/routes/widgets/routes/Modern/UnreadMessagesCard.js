import React from "react";

import Widget from "components/Widget/index";

const UnreadMessagesCard = () => {
  return (
    <Widget styleName="jr-pink-purple-gradient text-white p-4">
      <div className="d-flex flex-row justify-content-between mb-2">
        <i className="zmdi zmdi-email-open jr-fs-xxl mr-2"/>
        <i className="zmdi zmdi-long-arrow-right zmdi-hc-lg"/>
      </div>
      <h2 className="text-white">271</h2>
      <p className="mb-0">Unread messages</p>
    </Widget>
  );
};

export default UnreadMessagesCard;
