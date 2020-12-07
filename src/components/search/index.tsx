import React, {Component} from "react";
import './index.less';
import {Input} from 'antd';
import {withRouter} from "react-router-dom";

const {Search} = Input;


class MySearch extends Component<any, any> {

    onSearch = (value) => {
        // console.log(value)
        this.props.history.push({pathname: "/search", query: {text: value}});
    }

    render() {
        return (
            <div className="search-all">
                <Search placeholder="搜索电影名，演员，影院" onSearch={this.onSearch.bind(this)} enterButton/>
            </div>
        );
    }
}

export default withRouter(MySearch);