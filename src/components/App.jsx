import { Component } from 'react';
// import { Counter } from "./Counter";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendelIncrementGoog = OIJLJLJ => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  hendelIncrementNeutral = OIJLJLJ => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  hendelIncrementBad = OIJLJLJ => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <h1>Cafe Expresso</h1>
        <h2>Please leave feedback</h2>
        <button onClick={() => this.hendelIncrementGoog(this.state.good)}>
          Good
        </button>
        <button onClick={() => this.hendelIncrementNeutral(this.state.neutral)}>
          neutral
        </button>
        <button onClick={() => this.hendelIncrementBad(this.state.bad)}>
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
