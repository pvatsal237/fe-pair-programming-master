import React from 'react';

function Card({ target, goalProgress, bankName, goalName, accountId }) {
  // const {goalName, target, goal, bankName} = props;

  return (
    <div className="cardbody">
      <h2 className="cardTitle">{goalName}</h2>
      <div className="displaytop">
        <p>
          Target:<span> ${target}</span>
        </p>
        <p>
          Goal:<span> ${goalProgress}</span>
        </p>
      </div>
      <p className="bankDetails">
        Receiving Account
        <br />
        {accountId}/{bankName}
      </p>
      <div className="displaybottom">
        <p>
          Progress:<span> {(100 * goalProgress / target).toFixed(2)}%</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
