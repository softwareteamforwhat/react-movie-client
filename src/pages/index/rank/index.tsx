import React, {Component} from "react";
import {Col, Divider, Row} from "antd";
import {Link} from "react-router-dom";
import {RankFollowResponse, RankTopResponse} from "../../../api/response/rankResponse";
import {apiGetFollowRank, apiGetTopRank} from "../../../api";

export default class IndexRank extends Component<any, { movieList: RankTopResponse[], movieList2: RankFollowResponse[] }> {

    constructor(props) {
        super(props);
        this.state = {movieList: [], movieList2: []};
        apiGetFollowRank(1).then((res) => {
            this.setState({movieList2: res.data});
        })
        apiGetTopRank(1).then((res) => {
            this.setState({movieList: res.data});
        })
    }

    render() {
        const list_follow: RankFollowResponse[] = this.state.movieList2;
        const list_top: RankTopResponse[] = this.state.movieList;
        return (
            <div className="rank-content">
                <div className="money-rank" style={{display: "inline"}}>
                    <Divider orientation="left" style={{color: "red"}}>今日票房
                    </Divider>
                    <Row gutter={[16, 24]}>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1299955
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "red",
                                        fontStyle: "italic",
                                        fontSize: "250%"
                                    }}>1</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>复仇者联盟4：终局之战</span></Col>
                                    <Col span={8} style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}>
                                        <span style={{
                                            textAlign: "center",
                                            lineHeight: "100%",
                                            color: "#FF0000"
                                        }}>1770.17万</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1282401
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "red",
                                        fontStyle: "italic",
                                        fontSize: "200%"
                                    }}>2</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>如果声音不记得</span></Col>
                                    <Col span={8} style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}>
                                        <span style={{
                                            textAlign: "center",
                                            lineHeight: "100%",
                                            color: "#FF0000"
                                        }}>556.69万</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1240838
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "black",
                                        fontStyle: "italic",
                                        fontSize: "100%"
                                    }}>3</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>疯狂原始人</span></Col>
                                    <Col span={8} style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}>
                                        <span style={{
                                            textAlign: "center",
                                            lineHeight: "100%",
                                            color: "#FF0000"
                                        }}>313.00万</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 33384
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "black",
                                        fontStyle: "italic",
                                        fontSize: "100%"
                                    }}>4</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>除暴</span></Col>
                                    <Col span={8} style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}>
                                        <span style={{
                                            textAlign: "center",
                                            lineHeight: "100%",
                                            color: "#FF0000"
                                        }}>175.63万</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1303287
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "black",
                                        fontStyle: "italic",
                                        fontSize: "100%"
                                    }}>5</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>冰雪奇缘2</span></Col>
                                    <Col span={8} style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        alignItems: "center",
                                        textAlign: "center",
                                        float: "right"
                                    }}>
                                        <span style={{
                                            textAlign: "center",
                                            lineHeight: "100%",
                                            color: "#FF0000"
                                        }}>168.86万</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                    </Row>
                </div>
                <div className="will-rank">
                    <Divider orientation="left" style={{color: "#FFB400"}}>最受期待
                        <Divider type="vertical"/>
                        <a href="/rank/follow" className="linkBtn">
                            <span>查看完整榜单</span>
                        </a>
                    </Divider>
                    <Row gutter={[16, 24]}>
                        {list_follow.map((movie: RankFollowResponse, index: number) => {
                                let size1;
                                if (index === 0) {
                                    size1 = '250%';
                                } else if (index <= 2) {
                                    size1 = '200%';
                                } else {
                                    size1 = '100%';
                                }
                                const color1 = movie.index <= 3 ? "#FFB400" : "black";
                                return (
                                    <Col className="gutter-row" span={24}>
                                        <Link to={{
                                            pathname: "/movieinfo",
                                            state: {
                                                id: 1299955
                                            }
                                        }}>
                                            <Row gutter={[8, 8]}>
                                                <Col span={2}> <span style={{
                                                    fontWeight: "bold",
                                                    color: color1,
                                                    fontStyle: "italic",
                                                    fontSize: size1
                                                }}>{movie.index}</span></Col>
                                                <Col span={14} style={{
                                                    display: "flex",
                                                    justifyContent: "left",
                                                    alignItems: "center",
                                                    textAlign: "center"
                                                }}> <span
                                                    style={{
                                                        textAlign: "center",
                                                        lineHeight: "100%"
                                                    }}>{movie.name}</span></Col>
                                                <Col span={8} style={{
                                                    display: "flex",
                                                    justifyContent: "flex-end",
                                                    alignItems: "center",
                                                    textAlign: "center"
                                                }}>
                                        <span style={{
                                            textAlign: "center",
                                            lineHeight: "100%",
                                            color: "#FFB400"
                                        }}>{movie.follow + "人想看"}</span> </Col>
                                            </Row>
                                        </Link>
                                    </Col>
                                )
                            }
                        )}
                    </Row>
                </div>
                <div className="top-rank">
                    <Divider orientation="left" style={{color: "#FFB400"}}>评分最高
                        <Divider type="vertical"/>
                        <a href="/rank/top" className="linkBtn">
                            <span>查看完整榜单</span>
                        </a>
                    </Divider>
                    <Row gutter={[16, 24]}>
                        {list_top.map((movie: RankTopResponse, index: number) => {
                                let size1;
                                if (index === 0) {
                                    size1 = '250%';
                                } else if (index <= 2) {
                                    size1 = '200%';
                                } else {
                                    size1 = '100%';
                                }
                                const color1 = movie.index <= 3 ? "#FFB400" : "black";
                                return (
                                    <Col className="gutter-row" span={24}>
                                        <Link to={{
                                            pathname: "/movieinfo",
                                            state: {
                                                id: 1299955
                                            }
                                        }}>
                                            <Row gutter={[8, 8]}>
                                                <Col span={2}> <span style={{
                                                    fontWeight: "bold",
                                                    color: color1,
                                                    fontStyle: "italic",
                                                    fontSize: size1
                                                }}>{movie.index}</span></Col>
                                                <Col span={14} style={{
                                                    display: "flex",
                                                    justifyContent: "left",
                                                    alignItems: "center",
                                                    textAlign: "center"
                                                }}> <span
                                                    style={{
                                                        textAlign: "center",
                                                        lineHeight: "100%"
                                                    }}>{movie.name}</span></Col>
                                                <Col span={8} style={{
                                                    display: "flex",
                                                    justifyContent: "flex-end",
                                                    alignItems: "center",
                                                    textAlign: "center"
                                                }}>
                                        <span style={{
                                            textAlign: "center",
                                            lineHeight: "100%",
                                            color: "#FFB400"
                                        }}>{movie.rank + "分"}</span> </Col>
                                            </Row>
                                        </Link>
                                    </Col>
                                )
                            }
                        )}
                    </Row>
                </div>
            </div>
        );
    }
}