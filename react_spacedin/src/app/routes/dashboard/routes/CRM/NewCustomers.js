import React from "react";

import Widget from "components/Widget";
import Avatar from '@material-ui/core/Avatar';

const userImageList = [
  {
    id: 1,
    image:'https://via.placeholder.com/150x150',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150x150',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150x150',

  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150x150',
    name: 'Mila Alba',
    rating: '5.0',
    deals: '27 Deals'
  },
];

const NewCustomers = () => {
  return (
    <Widget title="New Customers" styleName="jr-card-metrics p-4">
      <div className="jr-customers">
        <ul className="list-inline mb-0">
          {userImageList.map((user, index) =>
            <li className="list-inline-item mr-0" key={index}>
              <Avatar className="size-50" src={user.image}/>
            </li>
          )
          }
        </ul>
      </div>
    </Widget>
  );
}


export default NewCustomers;
