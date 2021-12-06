import { FC } from 'react';
import './App.scss';
import TicTacToe from './components/TicTacToe/index';

const App: FC = () => {

  return (
    <div>
      {/* 井字棋 */}
      <TicTacToe />

      
    </div>
  )
}

export default App;
