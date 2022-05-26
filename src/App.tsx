import { FC } from 'react';
import './App.scss';
import TicTacToe from './components/TicTacToe/index'
import UHooks from './components/UseHooks/index';
import HandleEvents from './components/HandleEvents/index';
import ChildApi from './components/ChildApi/index';
import HandleRedux from './components/HandleRedux/index';
import { Provider } from 'react-redux';
import store from './store/index';

const App: FC = () => {

  return (
    <Provider store={store}>
      {/* 井字/scrm/clue/page棋 */}
      <TicTacToe />
      
      {/* Hooks */}
      <UHooks />
      
      {/* Events */}
      <HandleEvents />
      
      {/* ChildApi */}
      <ChildApi />

      <HandleRedux />
    </Provider>
  );
};

export default App;
