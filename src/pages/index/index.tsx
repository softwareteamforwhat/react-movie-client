import React, {Component} from 'react'
import Header from "../../components/header";

/*
主页的路由组件
 */
export default class Index extends Component {

    // click = () => {
    //     localStorage.removeItem("nickName");
    //     localStorage.removeItem("token");
    //     console.log("退出登录");
    // }

    render() {
        document.title = '主页';
        return (<div>
            <Header/>
        </div>);
    }
}