import React, {Component} from "react";
import {Button, Col, Divider, Row} from "antd";
import './index.less';
import {Link} from "react-router-dom";

export default class IndexMovie extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="movie-content">
                <div className="hot-movie" style={{display: "inline"}}>
                    <Divider orientation="left" style={{color: "red"}}><b>正在热映</b>
                        <Divider type="vertical"/>
                        <a href="/movies" className="linkBtn">
                            <span>查看全部</span>
                        </a>
                    </Divider>
                    <Row gutter={[16, 24]}>
                        <Col className="gutter-row" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 1282401
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p1.meituan.net/movie/f6ec2a022d3644ef493f881d359f65303190471.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title"
                                                 title="如果声音不记得">如果声音不记得
                                            </div>
                                            <div className="movie-score"><i className="integer">8.</i><i
                                                className="fraction">0</i></div>
                                        </div>
                                    </div>
                                    <Button className="poster-btn">购票</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 33384
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title"
                                                 title="除暴">除暴
                                            </div>
                                            <div className="movie-score"><i className="integer">6.</i><i
                                                className="fraction">0</i></div>
                                        </div>
                                    </div>
                                    <Button className="poster-btn">购票</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 1240838
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p1.meituan.net/moviemachine/dfc4bf8c71ae339874fdd3ffeb3763af10793417.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title"
                                                 title="疯狂原始人">疯狂原始人
                                            </div>
                                            <div className="movie-score"><i className="integer">9.</i><i
                                                className="fraction">1</i></div>
                                        </div>
                                    </div>
                                    <Button className="poster-btn">购票</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 1299955
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p0.meituan.net/moviemachine/f7d2ad70eb79d6d9b8a197713db9b8c41711752.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title"
                                                 title="复仇者联盟4：终局之战">复仇者联盟4：终局之战
                                            </div>
                                            <div className="movie-score"><i className="integer">9.</i><i
                                                className="fraction">8</i></div>
                                        </div>
                                    </div>
                                    <Button className="poster-btn">购票</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 1303287
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p0.meituan.net/moviemachine/58ee13be6dc60bf5e636cf915bbbaaa55787785.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title"
                                                 title="冰雪奇缘2">冰雪奇缘2
                                            </div>
                                            <div className="movie-score"><i className="integer">7.</i><i
                                                className="fraction">3</i></div>

                                        </div>
                                    </div>
                                    <Button className="poster-btn">购票</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 1242130
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p0.meituan.net/movie/8834e6905cba927646661ed25e9c95d1136086.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title"
                                                 title="猫鼠游戏">猫鼠游戏
                                            </div>
                                            <div className="movie-score"><i className="integer">9.</i><i
                                                className="fraction">1</i></div>

                                        </div>
                                    </div>
                                    <Button className="poster-btn">购票</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 1325487
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p0.meituan.net/movie/c7b0e1254807467dbc761f46e7f19d5d2976982.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title"
                                                 title="沐浴之王">沐浴之王
                                            </div>
                                            <div className="movie-score"><i className="integer"/><i
                                                className="fraction"/></div>
                                        </div>
                                    </div>
                                    <Button className="poster-btn">购票</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 1298050
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p1.meituan.net/movie/7335afbfd567ca5261d28a11d5bab706106991.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title"
                                                 title="哆啦A梦：大雄的新恐龙">哆啦A梦：大雄的新恐龙
                                            </div>
                                            <div className="movie-score"><i className="integer">9.</i><i
                                                className="fraction">1</i></div>

                                        </div>
                                    </div>
                                    <Button className="poster-btn">购票</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="will-movie">
                    <Divider orientation="left" style={{color: "#2D98F3"}}><b>即将上映</b>
                        <Divider type="vertical"/>
                        <a href="/movies" className="linkBtn">
                            <span>查看全部</span>
                        </a>
                    </Divider>
                    <Row gutter={[16, 40]}>
                        <Col className="gutter-row" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 1367649
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p0.meituan.net/movie/7cc1bdf342496b1fb3e80b419052100d1795568.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title2"
                                                 title="踮起脚尖去爱你">踮起脚尖去爱你
                                            </div>
                                        </div>
                                    </div>
                                    <div className="movie-detail movie-wish"><span
                                        className="stonefont">4711</span>人想看
                                    </div>
                                    <Button className="poster-btn2">预售</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 1285849
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p0.meituan.net/movie/e12e6e06611909d4ca032846af9257974671666.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title2"
                                                 title="南拳之英雄崛起">南拳之英雄崛起
                                            </div>
                                        </div>
                                    </div>
                                    <div className="movie-detail movie-wish"><span
                                        className="stonefont">660</span>人想看
                                    </div>
                                    <Button className="poster-btn2">预售</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 1372081
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p0.meituan.net/movie/30f321cb0cc71f60e4e86c3730497a32437305.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title2"
                                                 title="岁月江城">岁月江城
                                            </div>
                                        </div>
                                    </div>
                                    <div className="movie-detail movie-wish"><span
                                        className="stonefont">313</span>人想看
                                    </div>
                                    <Button className="poster-btn2">预售</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 343371
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://obj.pipi.cn/adAdmin/976e302f51bdddb535030cd96afd74d3de457.jpeg?imageView2/1/w/160/h/220)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title2"
                                                 title="枪上膛">枪上膛
                                            </div>
                                        </div>
                                    </div>
                                    <div className="movie-detail movie-wish"><span
                                        className="stonefont">42</span>人想看
                                    </div>
                                    <Button className="poster-btn2">预售</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 461076
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p0.meituan.net/moviemachine/2a2ddfec756916185e06bb760e5851212887659.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title2"
                                                 title="紧急救援">紧急救援
                                            </div>
                                        </div>
                                    </div>
                                    <div className="movie-detail movie-wish"><span
                                        className="stonefont">627144</span>人想看
                                    </div>
                                    <Button className="poster-btn2">预售</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 1207337
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p1.meituan.net/movie/f9f90625d902e3bfb75688037a2476f83410480.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title2"
                                                 title="神奇女侠1984">神奇女侠1984
                                            </div>
                                        </div>
                                    </div>
                                    <div className="movie-detail movie-wish"><span
                                        className="stonefont">93406</span>人想看
                                    </div>
                                    <Button className="poster-btn2">预售</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 637244
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p1.meituan.net/movie/a37f77d2b7c4403cfd8ad6983be3b8bf809681.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title2"
                                                 title="钱在囧途">钱在囧途
                                            </div>
                                        </div>
                                    </div>
                                    <div className="movie-detail movie-wish"><span
                                        className="stonefont">3804</span>人想看
                                    </div>
                                    <Button className="poster-btn2">预售</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 1258140
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p0.meituan.net/movie/46500f358800a58df971d7f86199bfcf385552.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title2"
                                                 title="村里来了新闻官">村里来了新闻官
                                            </div>
                                        </div>
                                    </div>
                                    <div className="movie-detail movie-wish"><span
                                        className="stonefont">169</span>人想看
                                    </div>
                                    <Button className="poster-btn2">预售</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
            ;
    }
}