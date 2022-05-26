import { FC, useEffect } from 'react';
import store from '../../store/index';
import './index.scss';
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'


const HandleRedux: FC = () => { 

  useEffect(() => {
    console.log(store.getState(),store)
  }, [])


  function sendAction() { 
    // store.dispatch({'todo'})
  }

  return (
    <div className='redux-main'>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <button onClick={sendAction}>123</button>
    </div>
  )
}

export default HandleRedux