import React, {Component} from "react";
import Header from "../../components/header";
import {apiSearch} from "../../api";
import {Col, Row} from "antd";
import {Link} from "react-router-dom";
import {SearchResponse} from "../../api/response/searchResponse";

const mockMovie: SearchResponse = {
    id: 1,
    url: "https://p0.meituan.net/movie/c7b0e1254807467dbc761f46e7f19d5d2976982.jpg@160w_220h_1e_1c",
    name: "沐浴之王",
    name2: "Test",
    time: "2020-02-03",
    actors: "1,2,3",
    type:"xiju,喜剧",
    rank: 9.2
}
const mockList = new Array(10).fill(mockMovie);
export default class Search extends Component<any, any> {
    constructor(props) {
        super(props);
        // console.log(props.match.params.text);
        // apiSearch(props.match.params.text).then((res) => {
        //     this.state = {movieList: res};
        // })
        this.state = {movieList: mockList}
    }

    render() {
        const list = this.state.movieList;
        return (
            <>
                <Header index={4}/>
                <Row>
                    {list.map((movie: SearchResponse, index: number) => {
                        return (<Col span={24} key={index}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: movie.id
                                }
                            }}>

                                <Row gutter={[8, 8]}>
                                    <Col span={2}/>
                                    <Col span={2} style={{
                                        display: "flex",
                                        alignItems: "center"
                                    }}/>
                                    <Col span={6} style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        height: "250px"
                                    }}>
                                        <img style={{width: "160px", height: "220px"}} alt={movie.name + "海报"}
                                             src={movie.url}/>
                                    </Col>
                                    <Col span={8} style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        textAlign: "center"
                                    }}>
                                        <h2 style={{color: "black", textAlign: "left"}}>{movie.name}</h2>
                                        <h3 style={{color: "gray", textAlign: "left"}}>{movie.name2}</h3>
                                        <span style={{color: "black", textAlign: "left"}}>{"主演：" + movie.actors}</span>
                                        <span style={{color: "black", textAlign: "left"}}>{"类型：" + movie.type}</span>
                                        <span style={{color: "gray", textAlign: "left"}}>{"上映时间：" + movie.time}</span>
                                    </Col>
                                    <Col span={4} style={{
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
                                    <Col span={2}/>
                                </Row>
                            </Link>
                        </Col>)
                    }
                    )}
                </Row>
            </>
        );
    }
}