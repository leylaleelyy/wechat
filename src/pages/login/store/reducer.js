import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState=fromJS({
    login: false,//默认数据，用于区分用户是否登录，默认false
});

export default (state =defaultState,action)=>{
    switch (action.type) {
        default:
            return state;
    }
}