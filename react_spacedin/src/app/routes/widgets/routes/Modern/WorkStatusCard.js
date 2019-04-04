import React from "react";
import Fab from '@material-ui/core/Fab';
import {Area, AreaChart, ResponsiveContainer} from "recharts";

import Widget from "components/Widget/index";

const data = [
  {name: 'Page A', uv: 1900, pv: 3200},
  {name: 'Page B', uv: 1300, pv: 4000},
  {name: 'Page C', uv: 1850, pv: 2500},
  {name: 'Page D', uv: 1680, pv: 3000},
  {name: 'Page H', uv: 3900, pv: 2560},
  {name: 'Page I', uv: 1400, pv: 2700},
  {name: 'Page J', uv: 2200, pv: 2000},
  {name: 'Page K', uv: 1300, pv: 2000},
  {name: 'Page L', uv: 1880, pv: 3408},
  {name: 'Page M', uv: 2290, pv: 2960},
];

const WorkStatusCard = () => {

  return (
    <Widget styleName="jr-card-full">
      <div className="jr-onchart pt-5 bg-dark card-img-top">
        <ResponsiveContainer width="100%" height={75}>
          <AreaChart data={data}
                     margin={{top: 10, right: 0, left: 0, bottom: 0}}>

            <Area type='monotone' dataKey='pv' stackId="2" stroke='#00bcd4' fill='#00bcd4' fillOpacity={1}/>
            <Area type='monotone' dataKey='uv' stackId="1" stroke='#3f51b5' fill='#3f51b5' fillOpacity={1}/>
          </AreaChart>
        </ResponsiveContainer>
        <h1 className="jr-onchart-title ">CONNECTED <i className="zmdi zmdi-caret-up"/></h1>
        <Fab className="jr-badge-up jr-badge-up-right icon-btn-sm p-1">
          <i className="zmdi zmdi-google jr-fs-lg"/>
        </Fab>
      </div>
      <div className="p-3">
        <h4 className="mb-1 font-weight-semibold">Google Keep Status</h4>
        {/*<p className="text-grey card-text jr-fs-sm">Last week progress</p>*/}
      </div>
    </Widget>
  );
};

export default WorkStatusCard;
