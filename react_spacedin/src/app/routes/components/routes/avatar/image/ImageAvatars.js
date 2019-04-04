import React from 'react';
import Avatar from '@material-ui/core/Avatar';


function ImageAvatars() {
  return (
    <div className="manage-margin d-flex align-items-center flex-wrap">
      <Avatar className="size-100" alt="Remy Sharp" src="https://via.placeholder.com/150x150"/>

      <Avatar className="size-80" alt="Remy Sharp" src="https://via.placeholder.com/150x150"/>

      <Avatar className="size-60" alt="Remy Sharp" src="https://via.placeholder.com/150x150"/>

      <Avatar alt="Adelle Charles" src="https://via.placeholder.com/150x150"/>

      <Avatar className="size-30" alt="Remy Sharp" src="https://via.placeholder.com/150x150"/>
    </div>
  );
}

export default ImageAvatars;