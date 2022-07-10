import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:this.props.value};
  }
  render(){
    return(<button className="cell" onClick={() => this.setState({value:"X"})}>
      {this.state.value}
    </button>)
  };
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cells:[0, 1, 2, 3, 4, 5, 6, 7, 8]}
  }
  renderCell(i) {
    return <Cell value = {this.state.cells[i]}/>;
  }
  render(){
    const status = "nextplayer x"
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
