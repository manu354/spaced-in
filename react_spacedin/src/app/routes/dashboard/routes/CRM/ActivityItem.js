import React from "react";
import Avatar from '@material-ui/core/Avatar';

const ActivityItem = ({task}) => {
  return (
    <div className="media-body align-self-center">
      <p className="mb-0" >{task.title}</p>
      {task.imageList.length > 0 ?
        <ul className="list-inline mb-3 mt-2">
        {task.imageList.map((image, index) => {
            if (index === 2) {
              return <li className="mb-1 mr-0 list-inline-item align-top" key={"image-"+index}><a className="jr-img-more" href="#/">
                +{task.imageList.length - 2} More</a></li>;
            } else if (index > 2) {
              return null;
            } else {
              return <li className="mb-1 mr-0 list-inline-item align-top" key={"image-"+index}>
                <Avatar className="size-40 rounded" src={image}/>
              </li>
            }
          }
        )}
      </ul> : null}

    </div>
  );
};

export default ActivityItem;
