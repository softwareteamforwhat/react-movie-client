import React, {Component} from "react";
import {Col, Divider, Row} from "antd";
import './index.less';

export default class IndexMovie extends Component<any, any> {
    render() {
        return (
            <div className="movie-content">
                <div className="hot-movie" style={{display:"inline"}}>
                    <Divider orientation="left" style={{color: "red"}}>正在热映
                        <Divider type="vertical"/>
                        <a href="/movies" className="linkBtn">
                            <span>查看全部</span>
                        </a>
                    </Divider>
                    <Row gutter={[16, 24]}>
                        <Col className="gutter-row" span={6}>
                            <div>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div>col-6</div>
                        </Col>
                    </Row>
                </div>
                <div className="will-movie">
                    <Divider orientation="left" style={{color: "blue"}}>即将上映
                        <Divider type="vertical"/>
                        <a href="/movies" className="linkBtn">
                            <span>查看全部</span>
                        </a>
                    </Divider>
                    <Row gutter={[16, 24]}>
                        <Col className="gutter-row" span={6}>
                            <div>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div>col-6</div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}