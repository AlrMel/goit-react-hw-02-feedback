import { Component } from 'react';

export class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = () => {};

  render() {
    return (
      <div>
        <h1 style={{fontSize: 40, color: "#fff000"}}>Please leave feedback</h1>
        <button>
          <span style={{fontWeight: 'bold'}}>{this.state.good}</span>
        </button>
      </div>
    );
  }
}
