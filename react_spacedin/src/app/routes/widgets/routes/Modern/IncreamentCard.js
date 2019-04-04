import React from "react";
import {Area, AreaChart, ResponsiveContainer} from "recharts";

import Widget from "components/Widget/index";

const data = [
  {name: 'Page A', pv: 200},
  {name: 'Page B', pv: 1000},
  {name: 'Page C', pv: 600},
  {name: 'Page D', pv: 1600},
  {name: 'Page D', pv: 1000},
  {name: 'Page H', pv: 2260},
  {name: 'Page K', pv: 400},
];

const IncreamentCard = () => {
  return (
    <Widget styleName="jr-card-full">

      <div className="jr-actchart d-flex flex-row px-3 pt-3">
        <h2 className="mb-0 mr-2 jr-fs-lg">84% <i className="zmdi zmdi-caret-up jr-fs-xxl"/></h2>
        <p className="mb-0 text-grey jr-fs-sm">Increment in Active users</p>
      </div>
      <ResponsiveContainer className="overflow-hidden card-img-bottom" width="100%" height={52}>
        <AreaChart data={data}
                   margin={{top: 0, right: 0, left: 0, bottom: 0}}>
          <defs>
            <linearGradient id="color4" x1="0" y1="0" x2="1" y2="0">
              <stop offset="5%" stopColor="#aa3c6d" stopOpacity={1}/>
              <stop offset="95%" stopColor="#ff9800" stopOpacity={1}/>
            </linearGradient>
          </defs>
          <Area dataKey='pv' stackId="2" strokeWidth={0} stroke='#4D95F3' fill="url(#color4)" fillOpacity={1}/>
        </AreaChart>
      </ResponsiveContainer>

    </Widget>
  );
};

export default IncreamentCard;
