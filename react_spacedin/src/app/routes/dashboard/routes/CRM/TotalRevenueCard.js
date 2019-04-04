import React from "react";
import {Bar, BarChart, ResponsiveContainer} from "recharts";

import Widget from "components/Widget";
import {connect} from "react-redux";

const data = [
  {name: 'JAN', uv: 200, pv: 600,},
  {name: 'FEB', uv: 500, pv: 900,},
  {name: 'MAR', uv: 700, pv: 1200,},
  {name: 'APR', uv: 800, pv: 1300,},
  {name: 'MAY', uv: 700, pv: 1200,},
  {name: 'JUN', uv: 500, pv: 900,},
  {name: 'JUL', uv: 600, pv: 200,},
  {name: 'AUG', uv: 200, pv: 800,},
  {name: 'SEP', uv: 400, pv: 400,},
  {name: 'OCT', uv: 400, pv: 500,},
  {name: 'NOV', uv: 400, pv: 1200,},
  {name: 'DEC', uv: 200, pv: 800,},
];

const TotalRevenueCard = ({width}) => {
  return (
    <Widget title="Total Revenue" styleName="jr-card-metrics p-4">
      <div className="row no-gutters align-items-xl-end">
        <div className="col-xl-5 col-6 pr-2">
          <h3 className="mb-1 jr-fs-xxl jr-font-weight-bold">$216,759</h3>
          <p className="mb-md-0 text-grey">YTD revenue</p>
        </div>
        <div className="col-xl-7 col-6">
          <ResponsiveContainer className="gx-barchart" width="100%" height={55}>
            <BarChart data={data}
                      margin={{top: 0, right: 0, left: 0, bottom: 0}}>
              <Bar dataKey="pv" stackId="a" fill="#3f51b5" barSize={width <= 575 ? 4 : 8}/>
              <Bar dataKey="uv" stackId="a" fill="#4caf50" barSize={width <= 575 ? 4 : 8}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Widget>
  );
};


const mapStateToProps = ({settings}) => {
  const {width} = settings;
  return {width}
};

export default connect(mapStateToProps)(TotalRevenueCard);
