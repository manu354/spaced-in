import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';
import {db} from '../../../firebase/firebase';




const Dashboard = ({match}) => (
  <div className="app-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/crm`}/>
      <Route path={`${match.url}/crm`} component={asyncComponent(() => import('./routes/CRM'))}/>

      <Route component={asyncComponent(() => import('app/routes/extraPages/routes/404'))}/>
    </Switch>
  </div>
);

export default Dashboard;