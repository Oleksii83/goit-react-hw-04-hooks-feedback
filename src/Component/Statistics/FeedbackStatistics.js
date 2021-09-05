import React from 'react';

const Statistics = ({ stateGood, stateNeutral, stateBad, stateTotal, PositiveFeedback }) => (
  <div className="FeedbackStatisticSynopsis">
    <ul className="FeedbackStatisticList">
      <li className="FeedbackStatisticItem"> Good: {stateGood} </li>
      <li className="FeedbackStatisticItem"> Neutral: {stateNeutral}</li>
      <li className="FeedbackStatisticItem"> Bad: {stateBad}</li>
      <li className="FeedbackStatisticItem"> Total: {stateTotal}</li>
      <li className="FeedbackStatisticItem"> Positive feedback: {PositiveFeedback}%</li>
    </ul>
  </div>
);

export default Statistics;
