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
  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
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
    //data extry now allowed after winnder and user cant mondify its entry
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    //updated new array with current array
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  }

  render() {
    let status;
    const winner = calculateWinner(this.state.squares);
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next turn if for: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div className="container">
        <div>
          <Board squares={this.state.squares} onClick={(i) => this.handleClick(i)} />
        </div>
        <div>
          <div>{status}</div>
        </div>
      </div>
    );
  }
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
