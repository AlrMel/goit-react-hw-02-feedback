import { Component } from 'react';

export class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendelIncrement = (feedbackState) => {
    this.setState((prevState) => {
      return {
        [feedbackState]: prevState[feedbackState] + 1,
      };
    });
  };

  // hendelIncrementGoog = () => {
  //   this.setState(prevState => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  // };
  // hendelIncrementNeutral = () => {
  //   this.setState(prevState => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };
  // hendelIncrementBad = () => {
  //   this.setState(prevState => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };

  render() {
    return (
      <div>
        <h1>Cafe Expresso</h1>
        <h2>Please leave feedback</h2>
        <button onClick={() => this.hendelIncrement('good')}>
          Good
        </button>
        <button onClick={() => this.hendelIncrement('neutral')}>
          neutral
        </button>
        <button onClick={() => this.hendelIncrement('bad')}>
          bad
        </button>
        <h2>Statistics</h2>
        <span>{this.state.good}</span>
        <span>{this.state.neutral}</span>
        <span>{this.state.bad}</span>

        {/* <Counter /> */}
      </div>
    );
  }
}
