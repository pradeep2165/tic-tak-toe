import React, { Component } from "react";

class Square extends Component {
  render() {
    return (
      <button className="btn btn-sm btn-outline-secondary m-2 fs-1" style={{ width: "75px", height: "75px" }} onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  handleClick(i) {
    //clone of current array
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? "X" : "O";
    //updated new array with current array
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
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
