import React from "react";
import {Area, AreaChart, ResponsiveContainer, Tooltip} from "recharts";
import {db} from "../../../../../firebase/firebase";

// TODO: include sitevisit data with preexisiting values from local storage
var siteVisit = [
    {name: '1', Physics: 0, German: 0,},
    {name: '2', Physics: 0, German: 1},
    {name: '3', Physics: 5, German: 2},
    {name: '4', Physics: 10, German: 0},
    {name: '5', Physics: 4, German: 1},
    {name: '6', Physics: 16, German: 3},
    {name: '7', Physics: 5, German: 1},
    {name: '8', Physics: 11, German: 5},
    {name: '9', Physics: 6, German: 2},
    {name: '10', Physics: 11, German: 3},
    {name: '11', Physics: 30, German: 2},
    {name: '12', Physics: 10, German: 1},
    {name: '13', Physics: 13, German: 0},
    {name: '14', Physics: 4, German: 2},
    {name: '15', Physics: 3, German: 8},
    {name: '16', Physics: 1, German: 0},
    {name: '17', Physics: 0, German: 0},
];
var names = [];
var storedNames = ['Physics', 'German']

function collectNames(dat) {
    for (var i in dat) {
        if (!names.includes(dat[i].title)) {
            names.push(dat[i].title)
        }
    }
    console.log("YA NAMES", names)
}

function fill(start, end) { //incusive of start and end
    console.log("start, new", start, end);
    var date = parseInt(start);
    for (var i = date; i <= end; i++) {
        console.log("cc", i)
        var toPush = {
            name: date.toString()
        }
        names.forEach(function (name) {
            toPush[name] = 0
        })
        siteVisit.push(toPush)
    }
    console.log("after fill", JSON.parse(JSON.stringify(siteVisit)))
}

function work(dat) {
    collectNames(dat)
    var prevDate = dat[0].date;
    siteVisit = [0];
    var count = prevDate.split("-")[2];

    fill("1", count);
    console.log(siteVisit)
    count = parseInt(count);

    for (var i in dat) {
        var current = siteVisit.length - 1;

        console.log(i, current, dat[i].title);
        if (prevDate == dat[i].date) {
            siteVisit[current][dat[i].title] += 1
        } else {
            fill(parseInt(prevDate.split("-")[2]) + 1, dat[i].date.split("-")[2]);
            current = siteVisit.length - 1;
            // siteVisit[current] = {
            //     name: '1', Physics: 0
            // };
            siteVisit[current][dat[i].title] += 1;
            prevDate = dat[i].date
        }
    }
    fill(prevDate.split("-")[2], 31)

    console.log("SKRRR", siteVisit)
}

function createLabels(labels, isstatic) {
    const colors = ['#5061bc', '#e3458a', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];


    var staticOffset = 0;
    if (isstatic) {
        staticOffset += storedNames.length()
    }

    return labels.map((name, index) => (

        <Area key={index + staticOffset} type='monotone' dataKey={name} fillOpacity={(1 - index % 2 / 1.5)} stroke={colors[index]}
              fill={colors[index + staticOffset]}/>
    ));


}

const noRefreshLabels = createLabels(storedNames, true);

//This will not be refreshed. TODO: therefore insert labels that will be refreshed and those that wont.


class SiteVisit extends React.Component {


    constructor(props) {
        super(props);
        this.state = {data: siteVisit, labels: []};
    }

    async componentDidMount() {
        var dat = sessionStorage.getItem('data');
        console.log("CURRENT DATA", dat);
        if (!dat) {
            console.log("dat", dat);
            const doc_ref = db.collection('users').doc('manummasson8');
            await doc_ref.get().then((querySnapshot) => {
                var month = querySnapshot.data().currMonth;
                dat = querySnapshot.data()[month];
                sessionStorage.setItem('data', dat);
                work(dat);
            });
        } else {
            console.log("Yaghggg");
            work(dat)
        }
        // console.log(siteVisit);
        var labels = createLabels(names, false);

        this.setState({data: siteVisit, labels: labels})


    }

    render() {
        const {data, labels} = this.state;
        console.log(data);
        // const newLabels = get
        console.log("LABELS", labels, noRefreshLabels);
        return (

            <div className="pr-xl-5 pt-xl-2">
                <h6 className="text-uppercase mb-2 mb-lg-4">Your Month in Review</h6>
                <ResponsiveContainer width="100%" height={140}>
                    <AreaChart data={data}
                               margin={{top: 10, right: 0, left: -20, bottom: 0}}>
                        <Tooltip/>

                        {noRefreshLabels}
                        {labels}


                    </AreaChart>
                </ResponsiveContainer>
            </div>)
    }


}

export default SiteVisit;

