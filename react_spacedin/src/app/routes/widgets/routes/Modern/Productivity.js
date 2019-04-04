import React from "react";
import Avatar from '@material-ui/core/Avatar';
import {Area, AreaChart, ResponsiveContainer} from "recharts";

import Widget from "components/Widget/index";

const data = [
  {name: 'Page A', pv: 200},
  {name: 'Page B', pv: 800},
  {name: 'Page C', pv: 600},
  {name: 'Page D', pv: 2200},
  {name: 'Page D', pv: 1000},
  {name: 'Page H', pv: 2960},
  {name: 'Page K', pv: 1960},
];

const Productivity = () => {

  return (
    <Widget styleName="jr-card-full">
      <div className="d-flex flex-row px-3 pt-3">
        <i className="zmdi zmdi-settings pointer mt-1 ml-auto jr-fs-xl"/>
      </div>
      <div className="text-center px-3 pt-3">
        <div className="d-flex flex-row justify-content-around align-items-center mb-3">
          <i className="zmdi zmdi-chart jr-fs-xxl text-grey"/>
          <Avatar className="size-80" alt="..." src="https://via.placeholder.com/150x150"/>
          <i className="zmdi zmdi-comment-text jr-fs-xxl text-grey"/>
        </div>
        <div className="mb-3">
          <h2>Christina Johnson</h2>
          <p className="text-grey">Crypto Expert</p>
        </div>
      </div>
      <div className="jr-rechart card-img-bottom overflow-hidden">
        <div className="jr-rechart-prod">
          <div className="d-flex flex-row">
            <i className="zmdi zmdi-caret-up text-primary mr-2 pt-2"/>
            <h2 className="text-primary">38%</h2>
          </div>
          <p className="text-left">Productivity</p>
        </div>
        <ResponsiveContainer width="100%" height={118}>
          <AreaChart data={data}
                     margin={{top: 0, right: 0, left: 0, bottom: 0}}>
            <defs>
              <linearGradient id="colorpro" x1="0" y1="0" x2="1" y2="0">
                <stop offset="5%" stopColor="#2b2d5d" stopOpacity={1}/>
                <stop offset="95%" stopColor="#05bf36" stopOpacity={1}/>
              </linearGradient>
            </defs>
            <Area dataKey='pv' type='monotone' strokeWidth={0} stackId="2" stroke='#4D95F3'
                  fill="url(#colorpro)"
                  fillOpacity={1}/>
          </AreaChart>

        </ResponsiveContainer>
      </div>
    </Widget>
  );
};

export default Productivity;
