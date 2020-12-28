import React, {Component} from "react";
import Header from "../../components/header";
import {apiSearch} from "../../api";
import {Col, Row} from "antd";
import {Link} from "react-router-dom";
import {SearchResponse} from "../../api/response/searchResponse";
import {Empty} from 'antd';

const mockMovie: SearchResponse = {
  movieId: 1,
  picture: "https://p0.meituan.net/movie/c7b0e1254807467dbc761f46e7f19d5d2976982.jpg@160w_220h_1e_1c",
  c_name: "沐浴之王",
  e_name: "Test",
  date: "2020-02-03",
  actors: "1,2,3",
  type: "xiju,喜剧",
  rank: 9.2
}
const mockList = new Array(10).fill(mockMovie);
export default class Search extends Component<any, any> {
  constructor(props) {
    super(props);
    // console.log(props.match.params.text);
    this.state = {movieList: []}
    apiSearch(props.match.params.text).then((res) => {
      console.log(res)
      this.setState({movieList: res.data});
    })
    // this.state = {movieList: mockList}
  }

  render() {
    const list = this.state.movieList;
    if (list.length === 0) {
      return <>
        <Header index={4}/>
        <div style={{
          alignItems: "center",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          height: "100%"
        }}>
          <Empty description="没有找到电影，试试搜索电影名和演员的关键字"/>
        </div>
      </>
    }
    return (
      <>
        <Header index={4}/>
        <Row>
          {list.map((movie: SearchResponse, index: number) => {
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
                    }}/>
                    <Col span={6} style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      height: "250px"
                    }}>
                      <img style={{width: "160px", height: "220px"}} alt={movie.c_name + "海报"}
                           src={movie.picture}/>
                    </Col>
                    <Col span={8} style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center"
                    }}>
                      <h2 style={{color: "black", textAlign: "left"}}>{movie.c_name}</h2>
                      <h3 style={{color: "gray", textAlign: "left"}}>{movie.e_name}</h3>
                      <span style={{color: "black", textAlign: "left"}}>{"主演：" + movie.actors}</span>
                      <span style={{color: "black", textAlign: "left"}}>{"类型：" + movie.type}</span>
                      <span style={{color: "gray", textAlign: "left"}}>{"上映时间：" + movie.date}</span>
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