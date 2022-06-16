import React, { Component } from "react";

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button className="btn btn-sm btn-outline-secondary m-2 fs-1" style={{ width: "75px", height: "75px" }} onClick={() => this.setState({ value: "X" })}>
        {this.state.value}
      </button>
    );
  }
}
class Board extends Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
  render() {
    return (
      <div>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Board />
      </div>
    );
  }
}
