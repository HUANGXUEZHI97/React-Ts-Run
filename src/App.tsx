import { FC } from 'react';
import './App.scss';
import TicTacToe from './components/TicTacToe/index';
import HOC from './components/HOC/index';
import SHooks from './components/UseHooks/state';

const App: FC = function () {
  return (
    <div>
      {/* 井字棋 */}
      <TicTacToe />

      {/* HOC */}
      <HOC />

      {/* Hooks */}
      <SHooks />
    </div>
  );
};

export default App;
