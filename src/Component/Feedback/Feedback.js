import { useState, useEffect } from 'react';
import Options from '../feedbackOtions/FeedbackOptions';
import './Feedback.css';
import Statistics from '../Statistics/FeedbackStatistics';
import Section from '../Section title/SectionTitle';
import Notification from '../Notfication/Notification';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickGood = () => {
    setGood(prevState => prevState + 1);
  };

  const clickNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };

  const clickBad = () => {
    setBad(prevState => prevState + 1);
  };

  useEffect(() => {}, [good, neutral, bad]);
  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = (good * 100) / countTotalFeedback;

  return (
    <section className="Feedback">
      <Section title={'Please Leave feedback'} />
      <Options onClickGood={clickGood} onClickNeutral={clickNeutral} onClickBad={clickBad} />
      <Section title={'Statistic'} />
      {countTotalFeedback !== 0 ? (
        <Statistics
          stateGood={good}
          stateNeutral={neutral}
          stateBad={bad}
          stateTotal={countTotalFeedback}
          PositiveFeedback={Math.round(countPositiveFeedbackPercentage)}
        />
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </section>
  );
}

// class OldFeedback extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     visible: false,
//   };

//   clickGood = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//     }));
//   };

//   clickNeutral = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//     }));
//   };

//   clickBad = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good * 100) / this.countTotalFeedback());
//   };

//   render() {
//     return (
//       <section className="Feedback">
//         <Section title={'Please Leave feedback'} />
//         <Options
//           onClickGood={this.clickGood}
//           onClickNeutral={this.clickNeutral}
//           onClickBad={this.clickBad}
//         />

//         <Section title={'Statistic'} />
//         {this.countTotalFeedback() !== 0 ? (
//           <Statistics
//             stateGood={this.state.good}
//             stateNeutral={this.state.neutral}
//             stateBad={this.state.bad}
//             stateTotal={this.countTotalFeedback()}
//             PositiveFeedback={this.countPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <Notification message={'No feedback given'} />
//         )}
//       </section>
//     );
//   }
// }

// export default Feedback;
