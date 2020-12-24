import {Component} from "react";
import {Link} from "react-router-dom";
import React from "react";
import './moviebanner.less'
import { Rate } from 'antd';

export default class MovieBanner extends Component {

    constructor(props){
        super(props);
        this.state={
            starTextJudge:true
        };
        this.changeFollowState=this.changeFollowState.bind(this);
        this.popBox=this.popBox.bind(this);
        this.closeBox=this.closeBox.bind(this);
        this.confirmStar=this.confirmStar.bind(this);
    }

    changeFollowState(){
        this.props.changeFollowState();
    }
    confirmStar(){
        this.setState({
            starTextJudge:false
        });
    }

    /*点击弹出按钮*/
    popBox() {
        this.setState({
            starTextJudge:true
        });
        var popBox = document.getElementById("popBox");
        var popLayer = document.getElementById("popLayer");
        popBox.style.display = "block";
        popLayer.style.display = "block";
    };

    /*点击关闭按钮*/
    closeBox() {
        var popBox = document.getElementById("popBox");
        var popLayer = document.getElementById("popLayer");
        popBox.style.display = "none";
        popLayer.style.display = "none";
    }


    render() {
        return <div className="banner">
            <div id="popLayer"/>
            <div id="popBox">
                <div className="jBox-container">
                    {this.state.starTextJudge?<div className={"jBox-content"}>
                        <div className={"score-msg-container"}>请点击星星评分</div>
                        <div className={"score-star-container"}>
                            <Rate className={"rate"} allowHalf />
                        </div>
                        <div className={"score-content-container"}>
                            <textarea className={"score-text"} placeholder={"快来发表你的评论吧"}/>
                        </div>
                        <button className={"confirm-btn"} onClick={()=>this.confirmStar()}>提交</button>
                    </div>:
                        <div className={"jBox-content"}>
                            <div className={"jBox-text"}>已收到您的评价信息~</div></div>
                    }

                    <div className="close">
                        <a onClick={()=>this.closeBox()}>×</a>
                    </div>
                </div>


            </div>
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
                                    <button className="score" onClick={()=>this.popBox()}>
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
