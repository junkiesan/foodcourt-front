import React from 'react';
import { View } from 'react-native';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducers from './app/reducers';

const rootReducer = combineReducers({...reducers});
const store = createStore(rootReducer, applyMiddleware(thunk));
const App = () => {  
  return (    
    <provider store="{store}"></provider>
      <view></view>
      
  );};



export default App;