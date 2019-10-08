import React, {Component} from "react";
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {actionCreators} from './store';
import './login.css';

class Login extends Component {

  render() {
    const {loginStatus} = this.props;
    if (!loginStatus) {
      return (
        <div id='body'>
          <div id='login-box'>
            <input id='login-name' ref={(input) => this.account = input} placeholder='账号'/>
            <input id='login-name' type='password' ref={(input) => this.password = input} placeholder='密码'/>
            <button id='login-btn' onClick={() => this.props.login(this.account, this.password)}>登录</button>
          </div>
        </div>

      )
    } else {
      return <Redirect to='/home'/>
    }

  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem.value, passwordElem.value));
    console.log(accountElem.value, passwordElem.value);
  }
});
export default connect(mapState, mapDispatch)(Login);