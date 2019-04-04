import React from "react";
import {Bar, BarChart, ResponsiveContainer} from "recharts";

import Widget from "components/Widget/index";

const data = [
  {name: 'Page A', uv: 500, pv: 600, sv: 400},
  {name: 'Page B', uv: 700, pv: 800, sv: 700},
  {name: 'Page C', uv: 900, pv: 1400, sv: 700},
  {name: 'Page D', uv: 1600, pv: 1800, sv: 1800},
  {name: 'Page G', uv: 1200, pv: 1000, sv: 1800},
  {name: 'Page F', uv: 800, pv: 1000, sv: 1200},
  {name: 'Page G', uv: 500, pv: 300, sv: 1500},
  {name: 'Page H', uv: 400, pv: 200, sv: 600},
  {name: 'Page I', uv: 900, pv: 800, sv: 1400},
];

const CampaignCard = () => {
  return (
    <Widget styleName="py-3">
      <div className="row no-gutters">
        <div className="col-8 pl-2">
          <h4 className="mb-0 jr-fs-md">Campaign Stats</h4>
          <p className="mb-0 text-grey jr-fs-sm">Past three weeks</p>
          <i className="zmdi zmdi-long-arrow-right text-blue pointer"/>
        </div>
        <div className="col-4">
          <ResponsiveContainer width="100%" height={50}>
            <BarChart data={data}
                      margin={{top: 0, right: 0, left: 0, bottom: 0}}>
              <Bar dataKey="uv" stackId="a" fill="#3f51b5"/>
              <Bar dataKey="pv" stackId="a" fill="#ff9800"/>
              <Bar dataKey="sv" stackId="a" fill="#D7D8DA"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Widget>
  );
};

export default CampaignCard;
