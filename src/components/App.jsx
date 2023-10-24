import { Component } from 'react';
// import { Counter } from "./Counter";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendelIncrement = () => {};

  render() {
    return (
      <div>
        <h1>Cafe Expresso</h1>
        <h2>Please leave feedback</h2>
        <button>Good</button>
        <button>neutral</button>
        <button>bad</button>
        <h2>Statistics</h2>
        <span>0</span>
        <span>0</span>
        <span>0</span>

        {/* <Counter /> */}
      </div>
    );
  }
}
