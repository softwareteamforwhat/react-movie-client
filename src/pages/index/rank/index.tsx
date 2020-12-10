import React, {Component} from "react";
import {Col, Divider, Row} from "antd";

export default class IndexRank extends Component<any, any>{
    render() {
        return (
            <div className="rank-content">
                <div className="money-rank" style={{display:"inline"}}>
                    <Divider orientation="left" style={{color: "red"}}>今日票房
                    </Divider>
                    <Row gutter={[16, 24]}>
                        <Col className="gutter-row" span={24}>
                            <div>1</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>2</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>3</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>4</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>5</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>6</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>7</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>8</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>9</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>10</div>
                        </Col>
                    </Row>
                </div>
                <div className="will-rank">
                    <Divider orientation="left" style={{color: "#FFB400"}}>最受期待
                        <Divider type="vertical"/>
                        <a href="/rank" className="linkBtn">
                            <span>查看完整榜单</span>
                        </a>
                    </Divider>
                    <Row gutter={[16, 24]}>
                        <Col className="gutter-row" span={24}>
                            <div>1</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>2</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>3</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>4</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>5</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>6</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>7</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>8</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>9</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>10</div>
                        </Col>
                    </Row>
                </div>
                <div className="top-rank">
                    <Divider orientation="left" style={{color: "#EF4238"}}>评分最高
                        <Divider type="vertical"/>
                        <a href="/rank" className="linkBtn">
                            <span>查看完整榜单</span>
                        </a>
                    </Divider>
                    <Row gutter={[16, 24]}>
                        <Col className="gutter-row" span={24}>
                            <div>1</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>2</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>3</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>4</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>5</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>6</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>7</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>8</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>9</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div>10</div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}