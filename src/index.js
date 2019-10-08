import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import rootReducer from './reducers/index'
import logger from 'redux-logger';
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware} from "redux";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger)
  )
);
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);


//挂载到dom节点的操作
//PWA借助网页写手机app应用，上传到https协议的服务器上，第一次需要联网
//serviceWorker.unregister();
