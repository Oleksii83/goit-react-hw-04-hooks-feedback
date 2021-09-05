import React from 'react';

const Controls = ({ onClickGood, onClickNeutral, onClickBad }) => (
  <div className="FeedbackButtonContainer">
    <button type="button" id="1" className="FeedbackButton" onClick={onClickGood}>
      Good
    </button>
    <button type="button" id="2" className="FeedbackButton" onClick={onClickNeutral}>
      Neutral
    </button>
    <button type="button" id="3" className="FeedbackButton" onClick={onClickBad}>
      Bad
    </button>
  </div>
);

export default Controls;
