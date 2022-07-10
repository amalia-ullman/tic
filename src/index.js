import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


function Cell(props) {
    return(<button className="cell" onClick={props.onClick}>
      {props.value}
    </button>)
}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {history: [{
      cells:[0, 1, 2, 3, 4, 5, 6, 7, 8], 
    }], 
    xnext:true}
  }
  handleClick(i) {
    const cells = this.state.cells.slice();
    let gameover = calculateWinner(this.state.cells);
    if (typeof cells[i] === "number" && !gameover) {
      cells[i] = this.state.xnext ? 'x' : '0';
      this.setState({cells:cells, xnext:!this.state.xnext})
    }
    else{
      alert("stop it.")
    }
    
  }
  renderCell(i) {
    return <Cell value = {this.state.cells[i]}
    onClick={() => this.handleClick(i)}/>;
  }
  render(){
    const winner = calculateWinner(this.state.cells);
    let status ; 
    if (winner) {
      status = "winner " + winner;
    }
    else {
      status = "player " + (this.state.xnext ? 'x' : '0');
    }
    return(
      <div>
        <div className='status'>{status}</div>
        <div className='ro'>
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
        </div>
        <div className='rt'>
          {this.renderCell(3)}
          {this.renderCell(4)}
          {this.renderCell(5)}
        </div>
        <div className='r3'>
          {this.renderCell(6)}
          {this.renderCell(7)}
          {this.renderCell(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  render(){
    return(
      <div className='Game'>
        <div className='Board'>
          <Board />
        </div>
      </div>
    )
  }
}

function calculateWinner(cells) {
  const winpos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let j = 0; j<winpos.length; j++) {
    const [a, b, c] = winpos[j]
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a]
    }
  }
  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
