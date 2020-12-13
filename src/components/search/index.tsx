import React, {Component} from "react";
import './index.less';
import {Input} from 'antd';

const {Search} = Input;


class MySearch extends Component<any, any> {

    onSearch = (value) => {
        // console.log(value)
        // this.props.history.push({pathname: "/search", query: {text: value}});
        window.location.href = "/search/" + value;
    }

    render() {
        return (
            <div className="search-all">
                <Search placeholder="输入名称、演职员搜索电影" onSearch={this.onSearch.bind(this)} enterButton/>
            </div>
        );
    }
}

export default MySearch;