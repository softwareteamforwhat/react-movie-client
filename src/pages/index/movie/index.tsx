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
                        <Col className="gutter-row2" span={6}>
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
                        <Col className="gutter-row2" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 33384
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p0.meituan.net/movie/8a4d51d25d44f15c216fbe2396bf49ae116445.jpg@160w_220h_1e_1c)"}}>
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
                        <Col className="gutter-row2" span={6}>
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
                        <Col className="gutter-row2" span={6}>
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
                        <Col className="gutter-row2" span={6}>
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
                        <Col className="gutter-row2" span={6}>
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
                        <Col className="gutter-row2" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 1228788
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p1.meituan.net/moviemachine/36bf499d2e2821a5cae7c4bdfc280c3e2143283.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title"
                                                 title="守望相思树">守望相思树
                                            </div>
                                            <div className="movie-score"><i className="integer"/>7.<i
                                                className="fraction"/>3
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="poster-btn">购票</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row2" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 1212263
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p1.meituan.net/movie/f99deeeeb74108ab009b79bb59233d5e304355.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title"
                                                 title="命运之夜——天之杯3：春之歌">命运之夜——天之杯3：春之歌
                                            </div>
                                            <div className="movie-score"><i className="integer">7.</i><i
                                                className="fraction">2</i></div>

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
                        <Col className="gutter-row2" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 1339160
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p0.meituan.net/moviemachine/a8827aeaa6455c20714b232fef09bf38662388.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title2"
                                                 title="海绵宝宝：营救大冒险">海绵宝宝：营救大冒险
                                            </div>
                                        </div>
                                    </div>
                                    <div className="movie-detail movie-wish"><span
                                        className="stonefont">92505</span>人想看
                                    </div>
                                    <Button className="poster-btn2">预售</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row2" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 489894
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p0.meituan.net/movie/2bc0317e150f59e79d023889f4439124119731.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title2"
                                                 title="哆啦A梦：伴我同行2">哆啦A梦：伴我同行2
                                            </div>
                                        </div>
                                    </div>
                                    <div className="movie-detail movie-wish"><span
                                        className="stonefont">79115</span>人想看
                                    </div>
                                    <Button className="poster-btn2">预售</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row2" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 1280000
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p0.meituan.net/movie/cc11343903299a6b91628a2d6bcb406b869658.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title2"
                                                 title="鹭世界">鹭世界
                                            </div>
                                        </div>
                                    </div>
                                    <div className="movie-detail movie-wish"><span
                                        className="stonefont">97328</span>人想看
                                    </div>
                                    <Button className="poster-btn2">预售</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row2" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 342325
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p0.meituan.net/movie/700df54f1efed73aa7bc8e89ed39cc39377541.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title2"
                                                 title="海贼王剧场版10：强者天下">海贼王剧场版10：强者天下
                                            </div>
                                        </div>
                                    </div>
                                    <div className="movie-detail movie-wish"><span
                                        className="stonefont">75480</span>人想看
                                    </div>
                                    <Button className="poster-btn2">预售</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row2" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 1230121
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p0.meituan.net/movie/24273341763f3010aea46285eddd9fea5460447.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title2"
                                                 title="猩球崛起">猩球崛起
                                            </div>
                                        </div>
                                    </div>
                                    <div className="movie-detail movie-wish"><span
                                        className="stonefont">73101</span>人想看
                                    </div>
                                    <Button className="poster-btn2">预售</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row2" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 1298859
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p0.meituan.net/movie/bd158fd18d8fe3e61eff61169aaa1bc5666562.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title2"
                                                 title="两小无猜">两小无猜
                                            </div>
                                        </div>
                                    </div>
                                    <div className="movie-detail movie-wish"><span
                                        className="stonefont">86693</span>人想看
                                    </div>
                                    <Button className="poster-btn2">预售</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row2" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 1212
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p0.meituan.net/movie/9a53417f80172c9051e044ca367aaaaa812555.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title2"
                                                 title="小门神">小门神
                                            </div>
                                        </div>
                                    </div>
                                    <div className="movie-detail movie-wish"><span
                                        className="stonefont">81951</span>人想看
                                    </div>
                                    <Button className="poster-btn2">预售</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="gutter-row2" span={6}>
                            <div className="movie-item">
                                <Link to={{
                                    pathname: "/movieinfo",
                                    state: {
                                        id: 1286060
                                    }
                                }}>
                                    <div className="movie-poster"
                                         style={{backgroundImage: "url(https://p1.meituan.net/movie/4f294d593f888bd5b4c6d13c0ada03583157850.jpg@160w_220h_1e_1c)"}}>
                                        <div className="movie-info">
                                            <div className="movie-title2"
                                                 title="霍比特人2：史矛革之战">霍比特人2：史矛革之战
                                            </div>
                                        </div>
                                    </div>
                                    <div className="movie-detail movie-wish"><span
                                        className="stonefont">65355</span>人想看
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