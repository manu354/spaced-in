import React from "react";

const WelComeCard = () => {

  return (
    <div className="jr-wel-ema pt-xl-2">
      <h1 className="mb-3">Welcome {localStorage.getItem('user_name')}!</h1>
    </div>
  );
};

export default WelComeCard;
