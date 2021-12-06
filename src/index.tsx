import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * @name 可直接渲染当前Dom节点——App
 */
// const App = React.createElement(
//   'h1',
//   { className: 'greeting' },
//   'Hello,World!'
// )

/**
 * @name 间隔1秒通过ReactDOM重新渲染
 * @description 从React的根Dom节点，重渲染。
 */
// const tick = ():void => {
//   const element = (
//     <div>
//       <h1>Hello,World!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   )

//   ReactDOM.render(element,document.getElementById('root'))
// }

// setInterval(tick,1000)


ReactDOM.render(
  // 
  /**
   * @name 严格模式，为App下后代元素触发额外的检查和警告
   * 1、识别不安全的生命周期
   * 2、关于使用过时字符串 ref API 的警告
   * 3、关于使用废弃的 findDOMNode 方法的警告
   * 4、检测意外的副作用
   * 5、检测过时的 context API
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
