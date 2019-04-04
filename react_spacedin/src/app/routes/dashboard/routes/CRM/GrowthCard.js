import React from "react";
import {Area, AreaChart, ResponsiveContainer} from "recharts";

import Widget from "components/Widget";
import {trafficData} from "./data"

const GrowthCard = () => {
  return (
    <Widget title="Growth" styleName={`jr-card-full pl-4 pt-3 jr-card-metrics`}>
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 col-4">
          <div className="pb-4">
            <h2 className="jr-fs-xxxl font-weight-bold mb-1 jr-chart-up">37%
              <i className="zmdi zmdi-caret-up jr-fs-xxl"/>
            </h2>
            <p className="mb-0 text-grey">This year</p>
          </div>
        </div>
        <div className="col-xl-8 col-lg-8 col-md-8 col-8">
          <ResponsiveContainer className="rounded-bottom-right overflow-hidden" width="100%" height={90}>
            <AreaChart data={trafficData}
                       margin={{top: 0, right: 0, left: 0, bottom: 0}}>
              <defs>
                <linearGradient id="color1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="5%" stopColor="#3f51b5" stopOpacity={0.9}/>
                  <stop offset="95%" stopColor="#1fb6fc" stopOpacity={0.9}/>
                </linearGradient>
              </defs>
              <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#867AE5' fill="url(#color1)" fillOpacity={1}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Widget>
  );
};

export default GrowthCard;
