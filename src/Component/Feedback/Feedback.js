import React from 'react';
import Options from '../feedbackOtions/FeedbackOptions';
import './Feedback.css';
import Statistics from '../Statistics/FeedbackStatistics';
import Section from '../Section title/SectionTitle';
import Notification from '../Notfication/Notification';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };

  clickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  clickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  clickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <section className="Feedback">
        <Section title={'Please Leave feedback'} />
        <Options
          onClickGood={this.clickGood}
          onClickNeutral={this.clickNeutral}
          onClickBad={this.clickBad}
        />

        <Section title={'Statistic'} />
        {this.countTotalFeedback() !== 0 ? (
          <Statistics
            stateGood={this.state.good}
            stateNeutral={this.state.neutral}
            stateBad={this.state.bad}
            stateTotal={this.countTotalFeedback()}
            PositiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </section>
    );
  }
}

export default Feedback;
