import React from "react";
import SiteVisit from "./SiteVisit";
import WelComeCard from "./WelComeCard";
import CardBox from "components/CardBox";
import SiteAudience from "./SiteAudience";
import Widget from "components/Widget/index";

import IntlMessages from "util/IntlMessages";

import NestedButtonGroup from './NestedButtonGroup';
import WorkStatusCard from './WorkStatusCard';
import EnterNew from './EnterNew';
import Recents from './recents';
import {NotificationManager} from "react-notifications";

console.log(localStorage.getItem('user_id'));
sessionStorage.clear();


const CRM = ({match}) => {
    return (

        <div className="dashboard animated slideInUpTiny animation-duration-3">

            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <Widget styleName="p-4">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                <WelComeCard/>
                            </div>

                            <div className="jr-visit-col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <SiteVisit/>
                            </div>
                        </div>
                    </Widget>
                </div>
                {/*<div>*/}
                {/*<Recents/>*/}
                {/*</div>*/}
                <div className="col-xl-5  col-md-8 col-12">
                    <div className="jr-card">
                        <Recents/>

                    </div>
                </div>
                <div className="col-xl-2 col-md-4 col-12">
                    <div className="row">


                        <CardBox styleName=" col-md-12 col-6 "
                                 heading="Rearrange Spaced Entries">
                            <div><IntlMessages id="This will spread out future tasks"/></div>
                            <NestedButtonGroup/>
                        </CardBox>

                        <div className=" col-md-12 col-6">
                            <WorkStatusCard/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 col-12">

                    <EnterNew/>
                </div>
                {/*<div className="col-xl-7 col-lg-7 col-md-12 col-12 order-sm-1">*/}
                {/*<div className="row">*/}
                {/*{detailCards.map((data, index) => <div key={index}*/}
                {/*className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">*/}
                {/*<IconWithTextCard data={data}/>*/}
                {/*</div>)*/}
                {/*}*/}

                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="col-xl-4 col-lg-4 col-md-6 col-12">*/}
                {/*<TotalRevenueCard/>*/}
                {/*</div>*/}

                {/*<div className="col-xl-8 col-lg-8 col-md-12 col-12 order-sm-1">*/}
                {/*<div className="row">*/}
                {/*{detailCards.map((data, index) => <div key={index}*/}
                {/*className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">*/}
                {/*<IconWithTextCard data={data}/>*/}
                {/*</div>)*/}
                {/*}*/}

                {/*<div className="col-xl-12 col-lg-12 col-md-12 col-12">*/}
                {/*<TaskList/>*/}
                {/*</div>*/}
                {/*<div className="col-xl-7 col-lg-7 col-md-7 col-12">*/}
                {/*<TicketList/>*/}
                {/*</div>*/}
                {/*<div className="col-xl-5 col-lg-5 col-md-5 col-12">*/}
                {/*<TaskByStatus/>*/}
                {/*</div>*/}
                {/*<div className="col-xl-12 col-lg-12 col-md-12 col-12">*/}
                {/*<Overview/>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="col-xl-4 col-lg-4 col-md-6 col-12">*/}
                {/*<NewCustomers/>*/}
                {/*</div>*/}


                {/*<div className="col-xl-4 col-lg-4 col-md-12 col-12">*/}
                {/*<GrowthCard/>*/}
                {/*</div>*/}
                {/*<div className="col-xl-4 col-lg-4 col-md-12 col-12 order-sm-2">*/}
                {/*<Widget>*/}
                {/*<RecentActivity recentList={recentActivity} shape="rounded"/>*/}
                {/*</Widget>*/}
                {/*<CurrencyCalculator/>*/}
                {/*</div>*/}
                {/*<div className="col-xl-8 col-lg-8 col-md-12 col-12">*/}
                {/*<CryptoNews/>*/}
                {/*</div>*/}

            </div>

        </div>
    );
};

export default CRM;
