import React, {Component} from "react";
import './mainlist.css'
import {Link} from "react-router-dom";

class MainList extends Component {
  render() {
    return (
      <div className='page-box'>
          <div className='passage'>
            <Link to='/home/passage'>
              <div className='img-box'></div>
              <div className='text-box'>
                <span>订阅号消息</span><br/>
                <span className='small'>[2条]共青团中央：为祖国发声音，正式首发...</span>
              </div>
            </Link>
          </div>

        <div className='chat'>
          <Link to="/home/chat-view">
            <div className='img-box'></div>
            <div className='text-box'>
              <span>某人</span><br/>
              <span className='small'>我太难了</span>
            </div>
          </Link>

        </div>
        <div className='wechat'>
          <div className='img-box'></div>
          <div className='text-box'>
            <span>群聊</span><br/>
            <span className='small'>不回去了🕊</span>
          </div>
        </div>
        <div>
          <div className='img-box' id='ic'></div>
          <div className='text-box'>
            <span>公众号</span><br/>
            <span className='small'>我和我的祖国，一刻不能分离！</span>
          </div>

        </div>
      </div>
    )
  }
}

export default MainList;