import React from 'react';
// import ReactDOM from 'react-dom';
import './index.scss';


type SquareProps = {
  value?: number | string,
  isHightLight: boolean, // 是否高亮
  onClick:Function
}

type BoardProps = {
  squares: any[], // 井字棋盘
  trail: number[], // 获得胜利的轨迹
  onClick: Function
}

type GameProps = {
  history: Array<{ squares: any[], curStep: null | any[] }>
  xIsNext: boolean,
  stepNumber: number,
  isReverseRecord:boolean
}


// 棋盘内小格子
const Square = (props: SquareProps) => {  
  return (
    <button className="square" style={{ backgroundColor: props.isHightLight ? '#ff030363' : '#fff'}} onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

// 棋盘
class Board extends React.Component<BoardProps> {

  renderSquare = (i: number) => {    
    return <Square value={this.props.squares[i]} isHightLight={this.props.trail.includes(i)} onClick={() => this.props.onClick(i)} key={i} />;
  }

  render() {
    const row = 3, column = 3;
    
    const squareComChild = (i: number) => {
      const Child = []
      for (let j = 0; j < column; j++) {
        Child.push(this.renderSquare(i + (j * column)))
      }
      return Child
    }

    const squareComDad = () => {
      const Dad = []
      for (let i = 0; i < row; i++) {
        Dad.push(
          <div className="board-row" key={i}>
            {squareComChild(i)}
          </div>
        )
      }
      return Dad
    }

    return (
      <div>
        {squareComDad()}
      </div>
    );
  }
}

class Game extends React.Component<Object, GameProps> {
  constructor(props: Object) {
    super(props)
    this.state = {
      history: [
        { squares: Array(9).fill(null), curStep: null}
      ],
      xIsNext: true, // 是否轮到 X
      stepNumber: 0, // 当前步骤位置
      isReverseRecord:false // 是否反转显示记录
    }
  }

  // 点击对应空格，将空格以对应元素填满
  handleClick(i: number) {
    const history = this.state.history.slice(0,this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = [...current.squares]

    // 当有玩家胜出时，或者某个 Square 已经被填充时，该函数不做任何处理直接返回。
    if (this.calculateWinner(squares) || squares[i]) return

    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([
        {
          squares,
          curStep: [i % 3, Math.floor(i / 3)]
        }
      ]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    })
  }

  // 判出胜者
  calculateWinner(squares: any[]): null | {winner:string,winTrail: number[]} {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return { winner: squares[a], winTrail: lines[i] }
      }
    }
    return null
  }

  // 跳转到对应历史位置
  JumpTo(move: number) {
    // const history = this.state.history.slice(0,move + 1)
    this.setState({
      // history,
      stepNumber: move,
      xIsNext: move % 2 === 0
    })
  }

  // 反转显示历史记录
  reverse() {
    this.setState({
      isReverseRecord: !this.state.isReverseRecord
    })
  }

  render() {    
    const { history, stepNumber, xIsNext, isReverseRecord } = this.state
    const current = history[stepNumber]

    const win = this.calculateWinner(current.squares)
    const status = win
      ? `winner：${win.winner}`
      : stepNumber === 9
        ? 'Result：draw!'
        : `next player：${xIsNext ? 'X' : 'O'}`
    
    let moves = history.map((step, move) => {
      const desc = move ? `Go To move #${move}` : 'Go To game start'

      return (
        <li key={move}>
          <button onClick={() => this.JumpTo(move)} style={{ fontWeight: stepNumber === move ? 800 : 500 }}>{desc}</button>
          {(() => {
            if (step.curStep) {
              return (<span> x：{step.curStep[0]}，y：{step.curStep[1]}</span>)
            }
          })()}
        </li>
      )
    })

    if (isReverseRecord) moves.reverse()

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} trail={win ? win.winTrail : []} onClick={ (i:number)=>this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button style={{padding:"5px",margin:"10px 0 10px 30px"}} onClick={ ()=>this.reverse()}>reverse record order</button>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );



export default Game