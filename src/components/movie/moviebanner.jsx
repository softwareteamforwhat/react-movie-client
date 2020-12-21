import {Component} from "react";
import {Link} from "react-router-dom";
import React from "react";
import './moviebanner.less'
import { Rate } from 'antd';
import MyFollow from '../../components/follow/index'

export default class MovieBanner extends Component {

    constructor(props){
        super(props);
        this.changeFollowState=this.changeFollowState.bind(this);
    }

    changeFollowState(){
        this.props.changeFollowState();
    }


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
                            {this.props.linktype === 1 ?
                                <Rate className={"rate"} disabled={true} allowHalf defaultValue={this.props.info.rank}/>:<div/>
                            }

                        </ul>
                    </div>

                    {this.props.linktype===1?
                        this.props.iflogged?
                            <div className="action-button">
                                <div>
                                    {this.props.ifFollowed?
                                        <button className="star" onClick={()=>this.props.changeFollowState()}>
                                            已收藏
                                        </button>:
                                        <button className="star" onClick={()=>this.props.changeFollowState()}>
                                            加入收藏
                                        </button>
                                    }
                                </div>
                                {/*<MyFollow hasFollowed={this.props.ifFollowed} id={this.props.id} />*/}
                                <div>
                                    <button className="score">
                                        评分
                                    </button>
                                </div>

                            </div>:<div className={"action-text"}>
                            登录后可进行收藏和评分操作
                        </div>:<div/>
                    }

                    <div className="movie-status-container">
                        {
                            this.props.linktype===1?
                            this.props.moviestate==="正在热映"?
                                (
                                    <Link to={
                                        {
                                            pathname:"/cinemas",
                                            state:{
                                                id:this.props.info.id
                                            }
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
                                        state:{
                                            id:this.props.info.id
                                        }
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
