import React,{Component} from 'react';

import Header from '../../components/header';
import './expense.less';
import {Col,Pagination,Row, Spin, Empty, message} from 'antd';
import {Link} from 'react-router-dom';
import { apiGetUserOrder } from '../../api';

/**
 * 注册的消费记录页面组件
 */
export default class Expense extends Component{

    constructor(props){
        super(props);
        this.state={
            orderList:[],
            loading:true,
        };
    }

    render(){
        return (
            <div className='expense-whole-page'>
                <Header index={-1} />
                <h1>我的订单</h1>
                <Spin spinning={this.state.loading}>
                    <this.orderListRender/>
                </Spin>
            </div>
        );
    }
    componentDidMount(){
        
        apiGetUserOrder(localStorage.getItem('id'),localStorage.getItem('token'),(error)=>{
            
        },()=>{
            this.setState({
                loading:false,
            })
        }).then((res)=>{
            console.log(res);
            if(res.status===0){
                this.setState({
                    orderList:res.data,
                })
            } else if(res.status===1){
                message.config({
                    top:100,
                })
                message.error(res.msg);
            }else{
                alert('status不为01');
            }
        });
        
    }

    getFakeOrderList(){
        const expenseList=[
            {
                "orderId":1234,
                "movie":{
                    movieId: "1240838",
                    picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
                    c_name: "除暴",
                    e_name: "Caught in Time",
                    type: ["犯罪", "剧情", "动作"],
                    area: "中国香港,中国大陆",
                    length: "95分钟",
                    time: "2020-11-20中国大陆上映",
                },
                "time":new Date().toLocaleString(),
                "status":"已支付",
                "unitPrice":100,
                "theater":"中宁国际影城",
                "hall":"6号激光厅",
                "vision":"国语2D",
                "session":"12月8日 13:00",
                "amount":2,
                "seats":[
                    "1排4座",
                    "1排5座",
                ],
            },
            {
                "orderId":4321,
                "movie":{
                    movieId: "1240838",
                    picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
                    c_name: "除暴",
                    e_name: "Caught in Time",
                    type: ["犯罪", "剧情", "动作"],
                    area: "中国香港,中国大陆",
                    length: "95分钟",
                    time: "2020-11-20中国大陆上映",
                },
                "time":new Date().toLocaleString(),
                "status":"已支付",
                "unitPrice":100,
                "theater":"中宁国际影城",
                "hall":"6号激光厅",
                "vision":"国语2D",
                "session":"12月8日 13:00",
                "amount":1,
                "seats":[
                    "2排3座"
                ],
            },
        ];
        return expenseList;
    }

    orderListRender = () => {
        const list= this.state.orderList;

        if(list.length===0){
            return <Empty description={
                <span>目前没有订单记录</span>
            }></Empty>
        }
        return (

            <Row>
                {list.map((order, index) => {
                        const size = index+1 <= 2 ? "800%" : "400%";
                        const color = index+1 <= 2 ? "#FFB400" : "black";
                        return (<Col span={24} key={index}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: order.movieBasic.movieId,
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

                                    }}></span></Col>
                                    <Col span={6} style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        height: "300px"
                                    }}>
                                        <img style={{width: "180px", height: "250px"}} alt={order.movieBasic.name + "海报"}
                                            src={order.movieBasic.picture}/>
                                    </Col>
                                    <Col span={8} style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        textAlign: "center"
                                    }}>
                                        <h2 style={{color: "black", textAlign: "left"}}>{order.movieBasic.c_name}</h2>
                                        <span style={{color: "black", textAlign: "left"}}>
                                            <span className="item-title">{"类型："}</span>
                                            <span className="item-value">{order.movieBasic.type.join('、')}</span>
                                        </span>
                                        <span style={{color: "black", textAlign: "left"}}>
                                            <span className="item-title">{"影院："}</span>
                                            <span className="item-value">{order.cinema}</span>
                                        </span>
                                        <span style={{color: "black", textAlign: "left"}}>
                                            <span className="item-title">{"影厅："}</span>
                                            <span className="item-value">{order.hall}</span>
                                        </span>
                                        <span style={{color: "black", textAlign: "left"}}>
                                            <span className="item-title">{"版本："}</span>
                                            <span className="item-value">{order.lang}</span>
                                        </span>
                                        <span style={{color: "gray", textAlign: "left"}}>
                                            <span className="item-title">{"场次："}</span>
                                            <span className="item-value">{order.session}</span>
                                        </span>
                                        <span style={{color: "black", textAlign: "left"}}>
                                            <span className="item-title">{"座位："}</span>
                                            <span className="item-value">{order.seats.join('、')}</span>
                                        </span>
                                        <span style={{color: "red", textAlign: "left"}}>
                                            <span className="item-title">{"票单价："}</span>
                                            {'¥'}
                                            <span className="item-value"><strong style={{fontSize:20}}>{order.price}</strong></span>
                                        </span>
                                        <span style={{color: "black", textAlign: "left"}}>
                                            <span className="item-title">{"数量："}</span>
                                            <span className="item-value">{order.amount}</span>
                                        </span>
                                        
                                        
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
                                            color: "red"
                                        }}>总价：¥<strong style={{fontSize:30}}>{order.price*order.amount}</strong></span> </Col>
                                    <Col span={2}/>
                                </Row>
                            </Link>
                        </Col>)
                    }
                )}
            </Row>
        );
    }
}
