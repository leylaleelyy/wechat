import React,{Component} from "react";
import { connect } from 'react-redux';
import './login.css'
class Login extends Component {
    render() {
        return(
                <div id='login-box'>
                    <input id='login-name' placeholder='账号'/>
                    <input id='login-name' placeholder='密码'/>
                    <button id='login-btn'>登录</button>
                </div>

        )
    }
}
const mapState=(state)=>({

});
const mapDispatch=(dispatch)=>({

});
export default connect(mapState,mapDispatch)(Login);