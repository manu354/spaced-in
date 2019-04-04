import React from "react";
import PropTypes from "prop-types";

import Aux from "util/Auxiliary";

const LineIndicator = ({title, width, value, color}) => {

  return (
    <Aux>
      <p>{title}</p>
      <div className="jr-line-indi-info">
        <div className={`jr-line-indi bg-${color}`} style={{
          width: Number.parseInt(width) * 4
        }}/>

        <span className="jr-line-indi-count ml-2">{value}</span>
      </div>
    </Aux>

  );
};

export default LineIndicator;

LineIndicator.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
