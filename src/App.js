import React ,{Fragment}from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import TabComponent from "./pages/pages";
import Passage from "./pages/passage/Passage";
import FriendCircle from "./pages/circle/FriendCircle";
import Issue from "./pages/circle/issue/Issue";
import ChatView from "./pages/chatview/ChatView";
import {Provider} from 'react-redux';
import store from "./store";
class App extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <Router >
                    <Fragment>
                        <Route path="/"  exact component={TabComponent} />
                        <Route path="/chat-view"  component={ChatView} />
                        <Route path="/passage"  component={Passage} />
                        <Route path="/friend-circle"  exact component={FriendCircle} />
                        <Route path="/friend-circle/issue"  component={Issue} />
                    </Fragment>
                </Router>
            </Provider>
            
        )
    }
}
export default App;
