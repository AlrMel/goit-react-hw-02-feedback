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

  render() {
    return (
      <div>
        <h1>Cafe Expresso</h1>
        <h2>Please leave feedback</h2>
        <button onClick={() => this.hendelIncrement('good')}>Good</button>
        <button onClick={() => this.hendelIncrement('neutral')}>neutral</button>
        <button onClick={() => this.hendelIncrement('bad')}>bad</button>
        <h2>Statistics</h2>
        <ul>
          <li>
            <span>Good: {this.state.good}</span>
          </li>
          <li>
            <span>Neutral: {this.state.neutral}</span>
          </li>
          <li>
            <span>Bad: {this.state.bad}</span>
          </li>
        </ul>
      </div>
    );
  }
}
