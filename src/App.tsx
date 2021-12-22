import { FC } from 'react';
import './App.scss';
import TicTacToe from './components/TicTacToe/index'
import UHooks from './components/UseHooks/index';
import HandleEvents from './components/HandleEvents/index';


const App: FC = () => {

  return (
    <div>
      {/* 井字/scrm/clue/page棋 */}
      <TicTacToe />
      
      {/* Hooks */}
      <UHooks />
      
      {/* Events */}
      <HandleEvents/>
    </div>
  );
};

export default App;
