import React from "react"
import TabsControl from "./TabsControl";
import {connect} from 'react-redux';
import {getIn} from "immutable";
import './header.css'
import MainList from "./mainpage/MainList";
import Friends from "./friends/Friends";
import Circle from "./circle/Circle";
import Todo from "./todo/Todo";
import {NavSearch,SearchWrapper} from "./header";
import {CSSTransition} from "react-transition-group";
import {Link} from "react-router-dom";

class TabComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            focused:false
        }
    }
    handleInputFocus(){
        this.setState({
            focused:true
        })
    }
    handleInputBlur(){
        this.setState({
            focused:false
        })
    }
    render(  ){
        const {login} =this.props;
        return(
            <div className="container">
                <TabsControl>
                    <div name = {<span>微信</span>} className='page1'>
                        <div className='header'>
                            <span>微信</span>
                            <SearchWrapper>
                                <CSSTransition
                                    in={this.state.focused}
                                    timeout={400}
                                    classNames="slide"
                                >
                                    <NavSearch
                                        className={this.state.focused?'focused':''}
                                        onFocus={this.handleInputFocus.bind(this)}
                                        onBlur={this.handleInputBlur.bind(this)}
                                    ></NavSearch>
                                </CSSTransition>
                                <span className={this.state.focused?'focused iconfont':'iconfont'}>&#xe63f;</span>
                            </SearchWrapper>
                        </div>
                        <MainList />
                    </div>
                    <div name = {<span>通讯录</span>} className='page1'>
                        <div className='header'>
                            <span>通讯录</span>
                            <SearchWrapper>
                                <CSSTransition
                                    in={this.state.focused}
                                    timeout={400}
                                    classNames="slide"
                                >
                                    <NavSearch
                                        className={this.state.focused?'focused':''}
                                        onFocus={this.handleInputFocus.bind(this)}
                                        onBlur={this.handleInputBlur.bind(this)}
                                    ></NavSearch>
                                </CSSTransition>
                                <span className={this.state.focused?'focused iconfont':'iconfont'}>&#xe63f;</span>
                            </SearchWrapper>
                        </div>
                        <Friends />
                    </div>
                    <div name = {<span>发现</span>} className='page1'>
                        <div className='header'>
                            <span>发现</span>
                            <SearchWrapper>
                                <CSSTransition
                                    in={this.state.focused}
                                    timeout={400}
                                    classNames="slide"
                                >
                                    <NavSearch
                                        className={this.state.focused?'focused':''}
                                        onFocus={this.handleInputFocus.bind(this)}
                                        onBlur={this.handleInputBlur.bind(this)}
                                    ></NavSearch>
                                </CSSTransition>
                                <span className={this.state.focused?'focused iconfont':'iconfont'}>&#xe63f;</span>
                            </SearchWrapper>
                        </div>
                        <Circle />
                    </div>
                    <div name = {<span>我</span>} className='page1'>
                        <div className='header'>
                            <span>待办</span>
                            <SearchWrapper>
                                <CSSTransition
                                    in={this.state.focused}
                                    timeout={400}
                                    classNames="slide"
                                >
                                    <NavSearch
                                        className={this.state.focused?'focused':''}
                                        onFocus={this.handleInputFocus.bind(this)}
                                        onBlur={this.handleInputBlur.bind(this)}
                                    ></NavSearch>
                                </CSSTransition>
                                <span className={this.state.focused?'focused iconfont':'iconfont'}>&#xe63f;</span>
                            </SearchWrapper>
                        </div>
                        <Todo></Todo>
                        {
                            login?<div>退出</div>:<Link to='/'><div>登录成功</div></Link>
                        }

                    </div>
                </TabsControl>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        login:state.login.login
    }
};
const mapDispatchToProps=(dispatch)=>{
    return{

    }
};
export default connect(mapStateToProps,mapDispatchToProps)(TabComponent);
