import { Component } from 'react';

export class Counter extends Component {
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
    return (
      <div>
        <h1>Cafe Expresso</h1>
        <h2>Please leave feedback</h2>
        <button onClick={() => this.hendelIncrement('good')}>Good</button>
        <button onClick={() => this.hendelIncrement('neutral')}>neutral</button>
        <button onClick={() => this.hendelIncrement('bad')}>bad</button>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>
        <span style={{fontWeight: 'bold', paddingRight: 12}}>Total: {this.countTotalFeedback()}</span>
        <span style={{fontWeight: 'lighter'}} >Positive feedback: {this.countPositiveFeedbackPercentage()}</span>
      </div>
    );
  }
}
