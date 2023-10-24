import { Component } from 'react';
// import { Counter } from "./Counter";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendelIncrement = (OIJLJLJ) => {
    this.setState(prevState => {
      return {
        good: prevState.good +1,
      }
    })
  };

  render() {
    return (
      <div>
        <h1>Cafe Expresso</h1>
        <h2>Please leave feedback</h2>
        <button onClick={() => this.hendelIncrement(this.state.good)}>Good</button>
        <button>neutral</button>
        <button>bad</button>
        <h2>Statistics</h2>
        <span>{this.state.good}</span>
        <span>{this.state.neutral}</span>
        <span>{this.state.bad}</span>

        {/* <Counter /> */}
      </div>
    );
  }
}
