import React,{Component,Fragment} from "react";
import "./chatview.css"
class ChatView extends Component{
    constructor(props){//构造函数最优先执行
        super(props);//父类的构造函数，调用方法
        this.state={//组件的状态，用来存储一些数据
            inputValue:'',//input框里的内容,由这个来决定，数据变化，页面自动就响应的变化了
            list:[]//列表中的每一项
        }
    }

    handleInputChange(event){//传入事件对象
        this.setState({//改变数据的方法,改变里面的状态
            inputValue:event.target.value//获取到输入的内容，并且把数据的内容改变
        });
    }

    handleBtnClick(){
        if(this.state.inputValue!==''){
            this.setState({//将输入的内容推进到list然后显示，同时重置inputValue的值
                list:[...this.state.list,this.state.inputValue],
                inputValue:''
            })
        }
    }
    render() {
        return(
            <Fragment>
                <header className='chat-header'>
                    <div className='img-back'
                         onClick={()=>{window.location.href="/home"}} >
                    </div>
                    <span className='chat-title'>某   人</span>
                </header>
                <div>
                    {//一个js表达式,循环输出list数组里的内容,一个回调函数接受内容和下标
                        this.state.list.map((item,index)=> {
                            return(
                                <div className='chat-content' key={index}>
                                    <div id='my-chat-icon'></div>
                                    <div id='chat-content'>
                                        <div id='chat-name'>AfterWeb</div>
                                        <div  id='message-box'> {item}</div>
                                    </div>

                                </div>)
                        })
                    }
                </div>
                <div id='room'></div>
                <footer>
                    <div id='voice-btn'></div>
                    <textarea id='input-message'
                              value={this.state.inputValue}
                              onChange={this.handleInputChange.bind(this)}
                    ></textarea>
                    <div id='send-message' onClick={this.handleBtnClick.bind(this)}>Send</div>
                </footer>
            </Fragment>
        )

    }
}
 export default ChatView;