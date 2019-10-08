import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
//store会更新数据
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));//创建了一个公共存储区域,传入store

export default store;