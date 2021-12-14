import { FC} from 'react';
import './App.scss';
import TicTacToe from './components/TicTacToe/index'
import SH from './components/UseHooks/state';
import CT from './components/UseContext/index';


const App: FC = () => {

  return (
    <div>
      {/* 井字棋 */}
      <TicTacToe />

      {/* hook */}
      <SH />

      {/* use context */}
      <CT />
    </div>
  )
}

export default App;
