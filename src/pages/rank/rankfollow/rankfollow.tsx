import React, {Component} from "react";
import Header from "../../../components/header";
import BlackBar from "../blackbar";
import {Col, Pagination, Row} from 'antd';
import {apiGetFollowRank} from "../../../api";
import {RankFollowResponse} from "../../../api/response/rankResponse";
import {Link} from "react-router-dom";

// const mockMovie: RankFollowResponse = {
//     index: 1,
//     id: 1,
//     picture: "https://p0.meituan.net/movie/c7b0e1254807467dbc761f46e7f19d5d2976982.jpg@160w_220h_1e_1c",
//     name: "沐浴之王",
//     time: "2020-02-03",
//     actors: "1,2,3",
//     follow: 1231412
// }
// const mockList = new Array(10).fill(mockMovie);

export default class RankFollow extends Component<any, { movieList: RankFollowResponse[] }> {
    constructor(props) {
        super(props);
        this.state = {movieList: []};
        apiGetFollowRank(1).then((res) => {
            this.setState({movieList: res.data});
        })
    }

    onChange = (page: number, pageSize: number = 10) => {
        apiGetFollowRank(page).then((res) => {
            this.setState({movieList: res.data});
        })
    }
    movieListRender = () => {
        const list: RankFollowResponse[] = this.state.movieList;
        return (

            <Row>
                {list.map((movie: RankFollowResponse, index: number) => {
                        const size = movie.index <= 2 ? "800%" : "400%";
                        const color = movie.index <= 2 ? "#FFB400" : "black";
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
                                    }}> <span style={{

                                        fontWeight: "bold",
                                        color: color,
                                        fontStyle: "italic",
                                        fontSize: size,

                                    }}>{movie.index}</span></Col>
                                    <Col span={6} style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        height: "250px"
                                    }}>
                                        <img style={{width: "160px", height: "220px"}} alt={movie.name + "海报"}
                                             src={movie.picture}/>
                                    </Col>
                                    <Col span={8} style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        textAlign: "center"
                                    }}>
                                        <h2 style={{color: "black", textAlign: "left"}}>{movie.name}</h2>
                                        <span style={{color: "black", textAlign: "left"}}>{"主演：" + movie.actors}</span>
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
                                        }}>{movie.follow + "人想看"}</span> </Col>
                                    <Col span={2}/>
                                </Row>
                            </Link>
                        </Col>)
                    }
                )}
            </Row>
        );
    }

    render() {
        return (
            <>
                <Header index={3}/>
                <BlackBar index={0}/>
                <div className="rank-follow-content" style={{textAlign: "center"}}>
                    <this.movieListRender/>
                    <Pagination defaultCurrent={1} total={50} onChange={this.onChange}/>
                </div>
            </>
        );
    }
}