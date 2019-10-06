import React,{Component} from "react";
import { connect } from 'react-redux';
import {LoginWrapper} from './style';
class Login extends Component {
    render() {
        return(
            <div>Login</div>
        )
    }
}
const mapState=(state)=>({

});
const mapDispatch=(dispatch)=>({

});
export default connect(mapState,mapDispatch)(Login);