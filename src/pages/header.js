import styled from 'styled-components';
export const SearchWrapper=styled.div`
    float:left;
    display:inline-block;
    position:relative;
    .slide-enter{
        transition:all .4s ease-out;
    }
    .slide-enter-active{
        width:250px;
    }
    .slide-exit{
        transition:all .4s ease-out;
    }
    .slide-exit-active{
        width:160px;
    }
    .iconfont {
        position:absolute;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused{
            background-color:#444444；
            color:#fff;
        }
    }
`;
export const NavSearch=styled.input.attrs({
    placeholder:'Search'
})`
    height:30px;
    width:160px;
    float:left;
    box-sizing:border-box;
    padding:0 35px 0 20px;
    margin-top:3px;
    margin-left:60px;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    color:#777;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:180px;
    }
`;
