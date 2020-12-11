import {Component} from "react";
import {Link} from "react-router-dom";
import React from "react";
import './moviebanner.less'

export default class MovieBanner extends Component {

    render() {
        return <div className="banner">
            <div className="wrapper">
                <div className="celeinfo-left">
                    <div className="avatar-shadow">
                        <img className="avatar" src={this.props.info.picture} alt={this.props.info.name}/>
                    </div>
                </div>
                <div className="celeinfo-right">
                    <div className="movie-brief-container">
                        <h1 className="name">{this.props.info.name}</h1>
                        <div className="subname">{this.props.info.name2}</div>
                        <ul>
                            <li className="movietypes">
                                {this.props.type}
                            </li>
                            <li>
                                {this.props.info.place+" "+this.props.info.length}
                            </li>
                            <li>
                                {this.props.info.time}
                            </li>

                        </ul>
                    </div>
                    <div className="action-button">
                        <button className="wish">
                            想看
                        </button>
                        <button className="score">
                            评分
                        </button>
                    </div>
                    <div className="movie-status-container">
                        {
                            this.props.linktype===1?
                            this.props.moviestate==="正在热映"?
                                (
                                    <Link to={
                                        {
                                            pathname:"/cinemas",
                                            id:this.props.info.id
                                        }
                                    }>
                                        <button className="buy-button" >立即购票</button>
                                    </Link>
                                ):(
                                    <button className="no-text">敬请期待</button>
                                ):
                                <Link to={
                                    {
                                        pathname:"/movieinfo",
                                        id:this.props.info.id
                                    }
                                }>
                                    <button className="buy-button">查看电影详情</button>
                                </Link>

                        }
                    </div>
                </div>
            </div>

        </div>
    }
}
