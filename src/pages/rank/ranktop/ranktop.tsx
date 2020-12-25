import React, {Component} from "react";
import Header from "../../../components/header";
import BlackBar from "../blackbar";
import {Col, Pagination, Row} from "antd";
import {apiGetTopRank} from "../../../api";
import {RankTopResponse} from "../../../api/response/rankResponse";
import {Link} from "react-router-dom";

// const mockMovie: RankTopResponse = {
//     index: 1,
//     id: 1,
//     picture: "https://p0.meituan.net/movie/c7b0e1254807467dbc761f46e7f19d5d2976982.jpg@160w_220h_1e_1c",
//     name: "沐浴之王",
//     time: "2020-02-03",
//     actors: "1,2,3",
//     rank: 9.2
// }
// const mockList = new Array(10).fill(mockMovie);
export default class RankTop extends Component<any, { movieList: RankTopResponse[] }> {
    constructor(props) {
        super(props);
        this.state = {movieList: []};
        apiGetTopRank(1).then((res) => {
            this.setState({movieList: res.data});
        })
    }

    onChange = (page: number, pageSize: number = 10) => {
        apiGetTopRank(page).then((res) => {
            console.log(res);
            this.setState({movieList: res.data});
        })
    }
    movieListRender = () => {
        const list: RankTopResponse[] = this.state.movieList;
        console.log(list);
        return (

            <Row>
                {list.map((movie: RankTopResponse, index: number) => {
                        const size = movie.index <= 2 ? "800%" : "400%";
                        const color = movie.index <= 2 ? "#FFB400" : "black";
                        return (<Col span={24} key={index}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: movie.movieId
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
                                        }}>{movie.rank + "分"}</span> </Col>
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
                <BlackBar index={1}/>
                <div className="rank-top-content" style={{textAlign: "center"}}>
                    <this.movieListRender/>
                    <Pagination showSizeChanger={false} defaultCurrent={1} total={100} onChange={this.onChange}/>
                </div>
            </>
        );
    }
}