import React from "react";
import Avatar from '@material-ui/core/Avatar';

import ActivityItem from "./ActivityItem";


function getName(task, shape) {
  if (task.avatar === '') {
    let nameSplit = task.name.split(" ")
    if (task.name.split(" ").length === 1) {
      const initials = nameSplit[0].charAt(0).toUpperCase();
      return <Avatar
        className={shape === 'circle' ? 'size-40 bg-primary mr-3 rounded' : 'size-40 bg-primary mr-3'}>{initials}</Avatar>
    } else {
      const initials = nameSplit[0].charAt(0).toUpperCase() + nameSplit[1].charAt(0).toUpperCase();
      return <Avatar
        className={shape === 'circle' ? 'size-40 bg-cyan mr-3 rounded' : 'size-40 bg-cyan mr-3'}>{initials}</Avatar>
    }
  } else {
    return <Avatar className={shape === 'circle' ? 'size-40 mr-3 rounded' : 'size-40 mr-3'} alt="..."
                   src={task.avatar}/>;
  }
}

class RecentActivity extends React.Component {

  onLoadMore() {
    console.log("loadMore")
  }


  render() {
    const {recentList, shape} = this.props;
 const  limit= window.innerWidth < 575 ? 1 : 3
    return (
      <div className="jr-entry-sec">
        <h2 className="jr-entry-title">Recent Activities</h2>
        {recentList.slice(0, limit).map((activity, index) =>
          <div className="jr-timeline-info" key={"activity-" + activity.id}>
            <h4 className="jr-timeline-info-day">{activity.day}</h4>
            <div className="recent-activity">
              {activity.tasks.map((task, index) => {
                return <div className="media user-profile" key={"taskId-" + task.id}>
                  {getName(task, shape)}
                  <ActivityItem task={task}/>
                </div>
              })}
            </div>
          </div>)}
        <span  className="jr-link" onClick={this.onLoadMore.bind(this)}>Load More</span>
      </div>
    );
  }
}

export default RecentActivity;
