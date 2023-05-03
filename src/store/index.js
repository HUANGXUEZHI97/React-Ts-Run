// import { configureStore } from '@reduxjs/toolkit';

import { createStore } from 'redux';
import todoApp from './reducers'

export default createStore(todoApp)