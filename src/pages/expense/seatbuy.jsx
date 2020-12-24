import React,{Component} from 'react';
import Header from "../../components/header";
import './seatbuy.less';
import Pay1 from '../../assets/images/pay1.png';
import Pay2 from '../../assets/images/pay2.png';
import {apiSaveOrder} from "../../api";

class Cell extends Component{
    constructor(props){
        super(props);
        this.select=this.select.bind(this)
    }

    select(seat,index){
        if(seat===0){
            this.props.select(index,2)
        }
        else if(seat===2){
            this.props.select(index,0)
        }
    }

    render() {
        if(this.props.seat===0){//0代表可以选的空座位
            return <div className="selectable seat" onClick={()=>this.select(this.props.seat,this.props.index)}/>
        }
        else if(this.props.seat===2){//2代表已选中的座位，可以取消选中
            return <div className="selected seat" onClick={()=>this.select(this.props.seat,this.props.index)}/>
        }
        else{
            return <div className="sold seat"/>
        }
    }

}
class Row extends Component{
    constructor(props){
        super(props);
        this.select=this.select.bind(this)
    }

    select(index,state){
        this.props.select(this.props.rowIndex,index,state)
    }
    render() {
        return <div className="row">
            {this.props.row.map(
                (seat,index)=>
                    <Cell
                        seat={seat}
                        index={index}
                        key={index}
                        select={this.select}/>
            )}
        </div>
    }
}
export default class SeatBuy extends Component{
    constructor(props){
        super(props);
        const {location}=this.props;


        let movieinfo={
            id:1240838,
            picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
            name: "除暴",
            type: [" 犯罪 ", " 剧情 ", " 动作 "],
            length: "95分钟"
        };
        let paipian={
            cinema:"中宁国际影城（京新广场店）",
            date:"12月9日",
            session:"10:00-12:00",
            lang:"国语",
            hall:"5号激光厅",
            price:30
        };
        const seats=[
            [0,0,0,0,0,1],
            [1,1,0,0,0,0],
            [0,0,0,0,0,1],
            [1,1,1,1,0,0]
        ];
        let uid,token;


        if(location.state&&location.state.movieinfo){//判断当前有参数
            movieinfo=location.state.movieinfo;
            paipian=location.state.paipian;
            uid=location.state.uid;
            token=location.state.token;
            sessionStorage.setItem('movieinfo',movieinfo);// 存入到sessionStorage中
            sessionStorage.setItem('paipian',paipian);
            sessionStorage.setItem('uid',uid);
            sessionStorage.setItem('token',token);
        }else{
            movieinfo=sessionStorage.getItem('movieinfo');// 当state没有参数时，取sessionStorage中的参数
            paipian=sessionStorage.getItem('paipian');
            uid=sessionStorage.getItem('uid');
            token=sessionStorage.getItem('token');
        }


        this.state={
            uid:uid,
            token:token,
            movieinfo:movieinfo,
            paipian:paipian,
            seats:seats,
            progressIndex:1,
            ticketIndexs:[],
            payType:0
        };

        this.update=this.update.bind(this);
        this.select=this.select.bind(this);
        this.goPay=this.goPay.bind(this);
        this.choosePayMethod=this.choosePayMethod.bind(this);
    }

    update(){
        console.log(this.state.progressIndex);
    }

    select(rowIndex,index,state){
        var seats=this.state.seats;
        //console.log(rowIndex,index)
        seats[rowIndex][index]=state;
        var ticketIndexs=[];
        for(var i=0;i<seats.length;i++){
            for(var j=0;j<seats[i].length;j++){
                //console.log(seats[i][j])
                if(seats[i][j]===2){
                    ticketIndexs.push(
                        {x:i,
                            y:j}
                    )
                }
            }
        }

        this.setState(
            {
                seats:seats,
                ticketIndexs:ticketIndexs
            },
            ()=>this.update()
        )
    }

    choosePayMethod(index){
        this.setState(
            {
                payType:index
            },
            ()=>this.update()
        )
    }
    goPay(){
        this.setState(
            {
                progressIndex:2
            },
            ()=>this.update()
        );
        var myDate = new Date();
        var mytime=myDate.getFullYear()+"-"+myDate.getMonth()+"-"+myDate.getDate()+" "+myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds();
        const orderInfo={
            uid:this.state.uid,
            movieId:this.state.movieinfo.movieId,
            cinema:this.state.paipian.cinema,
            purchaseTime:mytime,
            session:this.state.paipian.date+" "+this.state.paipian.session,
            lang:this.state.paipian.lang,
            hall:this.state.paipian.hall,
            unitPrice:this.state.paipian.price,
            seats:{}//选择的座位位置
        };
        var tickets={};
        for(var i=0;i<this.state.ticketIndexs.length;i++){
            tickets[this.state.ticketIndexs[i].x]=this.state.ticketIndexs[i].y;
        }
        orderInfo.seats=tickets;
        //console.log(this.state.token,orderInfo)
        apiSaveOrder(this.state.token,orderInfo).then(
            (res)=>{
               console.log("?",res)
            }
        )

    }
    render(){
        var ticketIndexs=this.state.ticketIndexs;
        const tickets=ticketIndexs.map(
            (ticketIndex,index)=>
                <span className="ticket" onClick={()=>this.select(ticketIndex.x,ticketIndex.y,0)} key={index}>
                    {ticketIndex.x+1}排{ticketIndex.y+1}座</span>
        );

        //console.log(tickets.length)

        return <div className="seat-buy">
            <Header index={-1}/>
            <div className="container">
                <div className="order-progress-bar">
                    <div className={"step first done"}>
                        <span className={'step-num'}>1</span>
                        <div className={"bar"}/>
                        <span className={"step-text"}>选择场次</span>
                    </div>
                    <div className={"step done"}>
                        <span className={'step-num'}>2</span>
                        <div className={"bar"}/>
                        <span className={"step-text"}>选择座位</span>
                    </div>
                    <div className={this.state.progressIndex===2?"step done last":"step last"}>
                        <span className={'step-num'}>3</span>
                        <div className={"bar"}/>
                        <span className={"step-text"}>14分钟内付款</span>
                    </div>
                </div>
                <div className="main">
                    {this.state.progressIndex===1?
                        <div className="seat-choose">
                            <div className="hall">
                                <div className="seat-sample">
                                    <div className="selectable-example example">
                                        <span>可选座位</span>
                                    </div>
                                    <div className="sold-example example">
                                        <span>已售座位</span>
                                    </div>
                                    <div className="selected-example example">
                                        <span>已选座位</span>
                                    </div>
                                </div>
                                <div className="seats-block">
                                    <div className="row-id-container">
                                        {this.state.seats.map(
                                            (row,index)=>
                                                <span className="row-id" key={index}>{index+1}</span>
                                        )}
                                    </div>
                                    <div className="seat-container">
                                        <div className="seats-wrapper">
                                            {this.state.seats.map(
                                                (row,index)=>
                                                    <Row
                                                        row={row}
                                                        select={this.select}
                                                        key={index}
                                                        rowIndex={index}
                                                    />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="side">
                                <div className="movie-info">
                                    <div className="poster">
                                        <img src={this.state.movieinfo.picture} alt={this.state.movieinfo.c_name}/>
                                    </div>
                                    <div className="content">
                                        <p className={"name text-ellipsis"}>{this.state.movieinfo.c_name}</p>
                                        <div className={"info-item"}>
                                            <span>类型：</span>
                                            <span className={"value"}>{this.state.movieinfo.type}</span>
                                        </div>
                                        <div className={"info-item"}>
                                            <span>时长：</span>
                                            <span className={"value"}>{this.state.movieinfo.length}分钟</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="show-info">
                                    <div className="info-item">
                                        <span>影院：</span>
                                        <span className="value text-ellipsis">{this.state.paipian.cinema}</span>
                                    </div>
                                    <div className="info-item">
                                        <span>影厅：</span>
                                        <span className="value text-ellipsis">{this.state.paipian.hall}</span>
                                    </div>
                                    <div className="info-item">
                                        <span>版本：</span>
                                        <span className="value text-ellipsis">{this.state.paipian.lang}</span>
                                    </div>
                                    <div className="info-item">
                                        <span>场次：</span>
                                        <span className="value text-ellipsis">
                                        {this.state.paipian.date+" "+this.state.paipian.session}
                                    </span>
                                    </div>
                                    <div className="info-item">
                                        <span>票价：</span>
                                        <span className="value text-ellipsis">{this.state.paipian.price+"元/张"}</span>
                                    </div>
                                </div>
                                <div className="ticket-info">
                                    {tickets.length===0?
                                        <p className="no-selected">
                                            请<span>点击左侧</span>座位图选择座位
                                        </p>
                                        :<div className={"has-ticket"}>
                                            <span className={"text"}>座位：</span>
                                            <div className={"ticket-container"}>
                                                {tickets}
                                            </div>
                                        </div>}
                                    <div className="total-price">
                                        <span>总价：</span>
                                        <span className="price">{this.state.paipian.price*tickets.length}元</span>
                                    </div>
                                </div>
                                <div className="confirm-order">
                                    {tickets.length===0?
                                        <div/>:<button className={"confirm-btn"} onClick={()=>this.goPay()}>
                                        立即付款
                                    </button>}

                                </div>
                            </div>
                        </div>: <div className="ticket-buy">
                            <p className={"warning"}>
                                请仔细核对场次信息，出票后将
                                <span className={"attention"}>无法退票和改签</span>
                            </p>
                            <table className={"order-table"}>
                                <thead>
                                <tr>
                                    <th>影片</th>
                                    <th>时间</th>
                                    <th>影院</th>
                                    <th>影厅</th>
                                    <th>座位</th>
                                </tr>
                                </thead>

                                <tbody>
                                {this.state.ticketIndexs.map(
                                    (ticket,index)=>
                                        <tr key={index}>
                                            <td className={"movie-name"}>{this.state.movieinfo.c_name}</td>
                                            <td className={"showtime"}>{this.state.paipian.date+" "+this.state.paipian.session}</td>
                                            <td className={"cinema-name"}>{this.state.paipian.cinema}</td>
                                            <td className={"hall"}>{this.state.paipian.hall}</td>
                                            <td className={"seats"}>
                                                {ticket.x+1}排{ticket.y+1}座
                                            </td>
                                        </tr>
                                )}
                                </tbody>
                            </table>
                            <div className="buy">
                                <div className={"payMethod"}>

                                    <div className={"img"}>
                                        <img src={this.state.payType===0?Pay1:Pay2} alt={"请扫码"}/>
                                    </div>
                                    <div className={"payButton"}>
                                        <div className="total-price">
                                            <span>总价：</span>
                                            <span className="price">{this.state.paipian.price*tickets.length}</span>
                                        </div>
                                        <div className={"choose"}>
                                            <button className={this.state.payType===0?"selected":""} onClick={()=>this.choosePayMethod(0)}>支付宝支付</button>
                                            <button className={this.state.payType===1?"selected":""} onClick={()=>this.choosePayMethod(1)}>微信支付</button>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>}
                </div>
            </div>

        </div>
    }
}
