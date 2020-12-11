import React, {Component} from "react";
import {Col, Divider, Row} from "antd";
import {Link} from "react-router-dom";

export default class IndexRank extends Component<any, any> {
    render() {
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
                                    id: 1325487
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
                                        style={{textAlign: "center", lineHeight: "100%"}}>沐浴之王</span></Col>
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
                                    id: 1298050
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
                                        style={{textAlign: "center", lineHeight: "100%"}}>哆啦A梦：大雄的新恐龙</span></Col>
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
                                    id: 1243732
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
                                        style={{textAlign: "center", lineHeight: "100%"}}>城市猎人</span></Col>
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
                                    id: 247294
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
                                        style={{textAlign: "center", lineHeight: "100%"}}>疯狂原始人2</span></Col>
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
                        <a href="/rank/will" className="linkBtn">
                            <span>查看完整榜单</span>
                        </a>
                    </Divider>
                    <Row gutter={[16, 24]}>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1334342
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "#FFB400",
                                        fontStyle: "italic",
                                        fontSize: "250%"
                                    }}>1</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>送你一朵小红花</span></Col>
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
                                        }}>3063141人想看</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1217023
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "#FFB400",
                                        fontStyle: "italic",
                                        fontSize: "200%"
                                    }}>2</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>唐人街探案3</span></Col>
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
                                        }}>418958人想看</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1330790
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "#FFB400",
                                        fontStyle: "italic",
                                        fontSize: "200%"
                                    }}>3</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>明天你是否依然爱我</span></Col>
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
                                        }}>196988人想看</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1229845
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
                                        style={{textAlign: "center", lineHeight: "100%"}}>晴雅集</span></Col>
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
                                        }}>171761人想看</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1299372
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
                                        style={{textAlign: "center", lineHeight: "100%"}}>温暖的抱抱</span></Col>
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
                                            color: "#FFB400"
                                        }}>171761人想看</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1299372
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "black",
                                        fontStyle: "italic",
                                        fontSize: "100%"
                                    }}>6</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>你好，李焕英</span></Col>
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
                                        }}>163761人想看</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1207337
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "black",
                                        fontStyle: "italic",
                                        fontSize: "100%"
                                    }}>7</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>神奇女侠1984</span></Col>
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
                                        }}>121761人想看</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1218142
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "black",
                                        fontStyle: "italic",
                                        fontSize: "100%"
                                    }}>8</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>拆弹专家2</span></Col>
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
                                        }}>71761人想看</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 461076
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "black",
                                        fontStyle: "italic",
                                        fontSize: "100%"
                                    }}>9</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>紧急救援</span></Col>
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
                                        }}>51761人想看</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1199007
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "black",
                                        fontStyle: "italic",
                                        fontSize: "100%"
                                    }}>10</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>侍神令</span></Col>
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
                                            color: "#FFB400"
                                        }}>21761人想看</span> </Col>
                                </Row>
                            </Link>
                        </Col>
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
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1200486
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "#FFB400",
                                        fontStyle: "italic",
                                        fontSize: "250%"
                                    }}>1</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>我不是药神</span></Col>
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
                                        }}>9.6分</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1297
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "#FFB400",
                                        fontStyle: "italic",
                                        fontSize: "200%"
                                    }}>2</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>肖申克的救赎</span></Col>
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
                                        }}>9.5分</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1206605
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "#FFB400",
                                        fontStyle: "italic",
                                        fontSize: "200%"
                                    }}>3</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>绿皮书</span></Col>
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
                                        }}>9.5分</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1292
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
                                        style={{textAlign: "center", lineHeight: "100%"}}>海上钢琴师</span></Col>
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
                                        }}>9.3分</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1211270
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
                                        style={{textAlign: "center", lineHeight: "100%"}}>哪吒之魔童降世</span></Col>
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
                                            color: "#FFB400"
                                        }}>9.2分</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1216365
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "black",
                                        fontStyle: "italic",
                                        fontSize: "100%"
                                    }}>6</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>小偷家族</span></Col>
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
                                        }}>9.1分</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1203
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "black",
                                        fontStyle: "italic",
                                        fontSize: "100%"
                                    }}>7</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>霸王别姬</span></Col>
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
                                        }}>9.1分</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 4055
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "black",
                                        fontStyle: "italic",
                                        fontSize: "100%"
                                    }}>8</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>这个杀手不太冷</span></Col>
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
                                        }}>9.1分</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 1303
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "black",
                                        fontStyle: "italic",
                                        fontSize: "100%"
                                    }}>9</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>美丽人生</span></Col>
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
                                        }}>9.1分</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: 416
                                }
                            }}>
                                <Row gutter={[8, 8]}>
                                    <Col span={2}> <span style={{
                                        fontWeight: "bold",
                                        color: "black",
                                        fontStyle: "italic",
                                        fontSize: "100%"
                                    }}>10</span></Col>
                                    <Col span={14} style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}> <span
                                        style={{textAlign: "center", lineHeight: "100%"}}>盗梦空间</span></Col>
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
                                            color: "#FFB400"
                                        }}>9.1分</span> </Col>
                                </Row>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}