import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOption/FeedbackOptions';
import Section from './Section/Section';
// import { Counter } from './Counter/Counter';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendelIncrement = feedbackState => {
    this.setState(prevState => {
      return {
        [feedbackState]: prevState[feedbackState] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((this.state.good * 100) / total);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div>
        <Section title="Say something, please!">
        <h1>Cafe Expresso</h1>
        <h2>Please leave feedback</h2>

        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.hendelIncrement}
        />

        <h2 className="">Statistics</h2>
        
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
        </Section>
      </div>
    );
  }
}
