import { FC } from 'react';
import './App.scss';
import TicTacToe from './components/TicTacToe/index'
import UHooks from './components/UseHooks/index';
import HandleEvents from './components/HandleEvents/index';
import ChildApi from './components/ChildApi/index';
import TestAlienCode from './components/测试外星人👽小册/index';
import moduleName from 'module';
import { Provider } from 'react-redux';
import store from './store/index';

const App: FC = () => {

  return (
    <Provider store={store}>
      {/* 井字/scrm/clue/page棋 */}
      {/* <TicTacToe /> */}
      
      {/* Hooks */}
      {/* <UHooks /> */}
      
      {/* Events */}
      {/* <HandleEvents /> */}
      
      {/* ChildApi */}
      {/* <ChildApi /> */}

      {/* 测试React 进阶实践指南 */}
      <TestAlienCode />
    </Provider>
  );
};

export default App;
