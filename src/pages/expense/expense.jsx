import React,{Component} from 'react';

import Header from '../../components/header';
import './expense.less';
import {Col,Row, Spin, Empty, message, Button,Tabs} from 'antd';
import {Link} from 'react-router-dom';
import { apiGetReturnOrder, apiGetUserOrder,apiReturnUserTicket } from '../../api';

/**
 * 注册的消费记录页面组件
 */

const TICKET_STATE=['已支付','已退票','已完成'];
export default class Expense extends Component{

    constructor(props){
        super(props);
        this.state={
            orderList_payed:[],
            orderList_returned:[],
            loading_payed:true,
            loading_returned:true,
        };
    }

    render(){
        return (
            <div className='expense-whole-page' style={{height:"100%"}}>
                <Header index={-1} />
                <h1 style={{position:"relative",right:"16px"}}>我的订单</h1>
                    <Tabs defaultActiveKey='0' centered style={{height:"100%",}}>
                        <Tabs.TabPane tab="已支付" key="0" style={{height:"100%",}}>
                            <div style={this.state.orderList_payed.length===0?{
                                height:"100%",
                                minHeight:'80vh',
                                
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",}:{
                                    
                                }}>
                            <Spin spinning={this.state.loading_payed} style={{position:"absolute",top:"0"}} >
                                <this.orderListRender orderList={this.state.orderList_payed}/>
                            </Spin>
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab='已退票' key='1'>
                            <div style={this.state.orderList_returned.length===0?{
                                height:"100%",
                                minHeight:"80vh",
                                
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                            }:{}}>
                            <Spin spinning={this.state.loading_returned}>
                                <this.orderListRender orderList={this.state.orderList_returned}/>

                            </Spin>
                            </div>
                        </Tabs.TabPane>
                    </Tabs> 
                
            </div>
        );
    }
    componentDidMount(){
        //强制显示滚动条避免组件移位
        document.body.style.overflowY="scroll";
        message.config({
            top:100,
        })
        
        apiGetUserOrder(localStorage.getItem('id'),localStorage.getItem('token'),(error)=>{
            
        },()=>{
            this.setState({
                loading_payed:false,
            })
        }).then((res)=>{
            if(res.status===0){
                res.data.map((order)=>{
                    let strTime=order.session.slice(0,order.session.lastIndexOf('-'));
                    strTime=new Date().getFullYear()+"-"+strTime;
                    const sessionTime=new Date(strTime);
                    if (sessionTime<new Date()){
                        order.state=2;
                    }
                    return order;
                })
                this.setState({
                    orderList_payed:res.data,
                })
                console.log(this.state.orderList_payed);
            } else if(res.status===1){
                
                message.error(res.msg);
            }else{
                alert('status不为01');
            }
        });

        apiGetReturnOrder(localStorage.getItem('id'),localStorage.getItem('token'),(error)=>{

        },()=>{
            this.setState({
                loading_returned:false,
            })
        }).then((res)=>{
            console.log(res);
            if(res.status===0){
                this.setState({
                    orderList_returned:res.data
                })
                
            }else if(res.status===1){
                message.error(res.msg);
            }else{
                alert('status不为01');
            }
        });
        
    }

    orderListRender = (props) => {
        const list= props.orderList;

        if(list.length===0){
            return <Empty description={
                <span>目前没有订单记录</span>
            }></Empty>
        }

        const return_click_handler=(e,index)=>{
            message.config({
                top:100,
            })
            e.preventDefault();
            this.setState({
                loading_payed:true,
                loading_returned:true,
            })

            console.log(index);
            apiReturnUserTicket(localStorage.getItem('id'),this.state.orderList_payed[index].orderId,localStorage.getItem('token'),(error)=>{
                
            },()=>{
                this.setState({
                    loading_payed:false,
                    loading_returned:false,
                })
            }).then((res)=>{
                if(res.status===0){
                    console.log(res);
                    message.success(res.msg);
                    this.state.orderList_returned.unshift(this.state.orderList_payed[index]);
                    this.state.orderList_payed.splice(index,1);
                    
                    this.setState((preState)=>{
                        preState.orderList_returned[0].state=1;
                        return {
                            orderList_returned:preState.orderList_returned,
                            orderList_payed:preState.orderList_payed,
                        }
                    })
                    
                }else if(res.status===1){
                    
                    message.error(res.msg);
                }else{
                    alert('status不为01');
                }
            });
        }
        return (

            <Row>
                {list.map((order, index) => {
                        
                        
                        const background=(index%2===0)?'background-white':'background-blue';
                        return (<Col span={24} key={index} className={'expense-item '+background}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: order.movieBasic.movieId,
                                }
                            }}>

                                <Row gutter={[8, 8]}>
                                    <Col span={2}/>
                                    
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
                                    <Col span={5} style={order.state===2?{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        textAlign: "center",
                                        color:"gray",
                                    }:{
                                        display:"flex",
                                        flexDirection:"column",
                                        justifyContent:"center",
                                        textAlign:"center",
                                        color:"black"
                                    }}>
                                        <h2 style={order.state===2?{color:"gray",textAlign: "left"}:{
                                            textAlign:"left",
                                        }}>{order.movieBasic.c_name}</h2>
                                        <span style={{textAlign: "left"}}>
                                            <span className="item-title">{"下单时间："}</span>
                                            <span className="item-value">{order.purchaseTime}</span>
                                        </span>
                                        <span style={{textAlign: "left"}}>
                                            <span className="item-title">{"影院："}</span>
                                            <span className="item-value">{order.cinema}</span>
                                        </span>
                                        <span style={{textAlign: "left"}}>
                                            <span className="item-title">{"影厅："}</span>
                                            <span className="item-value">{order.hall}</span>
                                        </span>
                                        <span style={{textAlign: "left"}} hidden={!order.lang}>
                                            <span className="item-title">{"版本："}</span>
                                            <span className="item-value">{order.lang}</span>
                                        </span>
                                        <span style={{textAlign: "left"}}>
                                            <span className="item-title">{"场次："}</span>
                                            <span className="item-value">{order.session}</span>
                                        </span>
                                        <span style={{textAlign: "left"}}>
                                            <span className="item-title">{"座位："}</span>
                                            <span className="item-value">{order.seats.join('、')}</span>
                                        </span>
                                    
                                        <span style={{textAlign: "left"}}>
                                            <span className="item-title">{"数量："}</span>
                                            <span className="item-value">{order.amount}</span>
                                        </span>

                                        <span style={{textAlign: "left"}}>
                                            <span className="item-title">{"票单价："}</span>
                                            {'¥'}
                                            <span className="item-value"><strong style={{fontSize:20}}>{order.price}</strong></span>
                                        </span>
                                        
                                        
                                    </Col>
                                    <Col span={4} style={{
                                        display:"flex",
                                        justifyContent:"flex-end",
                                        alignItems:"center",
                                        textAlign:"center",
                                    }}>
                                        {TICKET_STATE[order.state]}
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
                                        }}>总价：¥<strong style={{fontSize:30}}>{order.price*order.amount}</strong></span>
                                        </Col>
                                    <Col span={2} style={{
                                        display:"flex",
                                        justifyContent:"flex-end",
                                        alignItems:"center",
                                        textAlign:"center",
                                    }}>
                                    <Button type='primary' onClick={(e)=>return_click_handler(e,index)} disabled={order.state!==0} hidden={order.state!==0}>退票</Button>
                                    </Col>
                                    <Col span={1}></Col>
                                </Row>
                            </Link>
                        </Col>)
                    }
                )}
            </Row>
        );
    }
}
