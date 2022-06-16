import React, { Component } from "react";

class Square extends Component {
  render() {
    return <button style={{ width: "30px", height: "30px", margin: "5px" }}></button>;
  }
}
class Board extends Component {
  renderSquare() {
    return <Square />;
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
