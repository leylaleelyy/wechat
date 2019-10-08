import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TabComponent from "./pages/pages";
import Passage from "./pages/passage/Passage";
import FriendCircle from "./pages/circle/FriendCircle";
import ChatView from "./pages/chatview/ChatView";
import Login from "./pages/login/Login";
import './pages/icon/iconfont/iconfont.css'
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Route path="/" exact component={Login}/>
            <Route path="/home" exact component={TabComponent}/>
            <Route path="/home/chat-view" component={ChatView}/>
            <Route path="/home/passage" component={Passage}/>
            <Route path="/home/friend-circle" exact component={FriendCircle}/>
          </Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App;
