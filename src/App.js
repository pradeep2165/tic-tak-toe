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
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    //clone of current array
    const squares = current.squares.slice();
    //data extry now allowed after winnder and user cant mondify its entry
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    //updated new array with current array
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const squares = current.squares;
    const moves = history.map((step, move) => {
      const desc = move ? "Go to step #" + move : "Go to start game";
      return (
        <li key={move}>
          <button>{desc}</button>
        </li>
      );
    });
    let status;
    const winner = calculateWinner(squares);
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next turn if for: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="container">
        <div>
          <Board squares={squares} onClick={(i) => this.handleClick(i)} />
        </div>
        <div>
          <div>{status}</div>
          <div>{moves}</div>
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
