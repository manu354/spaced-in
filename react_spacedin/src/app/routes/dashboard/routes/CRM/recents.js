import React from "react";
import {db} from "../../../../../firebase/firebase";
import {recentList} from "./data2";
import CardHeader from 'components/dashboard/Common/CardHeader/index';
import RecentActivities from 'components/dashboard/Common/RecentActivities/index';
import IntlMessages from "util/IntlMessages";
import CardMenu from "../../../../../components/dashboard/Common/CardMenu";
import IconButton from '@material-ui/core/IconButton'

var recentDatas = [
    {
        image: 'assignment',
        title: "Physics",
        description: "Study uniform circular motion, focusing on work as a function of time",
        date: "20 March, 2017",
        color: "bg-primary"
    },
    {
        image: 'assignment-o',
        title: "Android app launched",
        description: "Chat project’s new Android app is launched.",
        date: "27 Feb, 2017",
        color: "bg-danger"
    },
    {
        image: 'assignment',
        title: "PSD file added to dropbox",
        description: "There are many variations of PSDs available.",
        date: "24 Feb, 2017",
        color: "bg-info"
    },

];
var isCollapsed = true;

class Recents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: [], maximum: 5, rawData: []};
    }

    work(dat, max) {
        let us = [];

        var maximum = max || this.state.maximum;
        console.log(maximum, max)
        var len = dat.length;
        console.log(len)
        if (maximum > len) maximum = len;

        var color = "bg-primary";
        for (var i = len - 1; i > len - maximum; i--) {
            // console.log(i);
            us.push({
                image: 'assignment-o',
                title: dat[i].title,
                description: dat[i].desc,
                date: dat[i].date,
                color: color
            });
            if (color == "bg-primary") {
                color = "bg-danger";
            } else if (color == "bg-danger") {
                color = "bg-info";
            } else color = "bg-primary";

        }
        return us
    }

    updateMax = () => {
        console.log("Max is getting updated")
        var max;
        if (isCollapsed) max = 20;
        else max = 5;
        var that = this;
        this.setState({
            maximum: max
        }, function () {
            var rawData = that.state.rawData;

            var us = that.work(rawData, max)
            that.setState({
                data: us
            })
            isCollapsed = !isCollapsed;
        });

    }

    async componentDidMount() {
        var us;
        var dat = sessionStorage.getItem('data');
        var that = this;
        if (!dat) {
            const doc_ref = db.collection('users').doc(localStorage.getItem('user_name'));
            await doc_ref.get().then((querySnapshot) => {
                var month = querySnapshot.data().currMonth;
                console.log("LO AMND BBEHOLD THE M<OTNJ", month)
                dat = querySnapshot.data()[month];
                dat.sort(function (a, b) {
                    // Turn your strings into dates, and then subtract them
                    // to get a value that is either negative, positive, or zero.
                    return new Date(b.date) - new Date(a.date);
                });
                us = that.work(dat);
                console.log("UDSS", us)
                sessionStorage.setItem('data', dat);
                that.setState({rawData: dat})
            });
        } else {
            console.log("its in storrage????")
            console.log(dat[0])
            // work(dat)
            us = []
        }

        this.setState({data: us});
    }

    render() {
        // console.log(this.state.us);
        const {data} = this.state;
        console.log(data);
        return (

            <div>


                <div className={`jr-card-header d-flex align-items-start`}>
                    <div className="mr-auto">
                        <h3 className="card-heading">Your next activities</h3>
                    </div>

                    <IconButton className="icon-btn text-dark" onClick={this.updateMax}>
                        <i className="zmdi zmdi-chevron-down"/>
                    </IconButton>
                </div>


                {data.map((recentList, index) => <RecentActivities key={index}
                                                                   recentData={recentList}/>)}
            </div>
        );
    }
}


export default Recents;