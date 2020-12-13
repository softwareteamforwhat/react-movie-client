import React,{Component} from 'react';
import Header from "../../components/header";
import './seatbuy.less';

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
        const movieinfo={
            picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
            name: "除暴",
            type: [" 犯罪 ", " 剧情 ", " 动作 "],
            length: "95分钟"
        };
        const paipian={
            cinema:"中宁国际影城（京新广场店）",
            date:"12月9日",
            starttime:"21:00",
            endtime:"23:00",
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

        this.state={
            movieinfo:movieinfo,
            paipian:paipian,
            seats:seats,
            progressIndex:1
        };
        this.update=this.update.bind(this);
        this.select=this.select.bind(this);

    }

    update(){
        //console.log(this.state.seats)
    }

    select(rowIndex,index,state){
        var seats=this.state.seats;
        //console.log(rowIndex,index)
        seats[rowIndex][index]=state;
        this.setState(
            {
                seats:seats
            },
            ()=>this.update()
        )
    }
    render(){
        var ticketIndexs=[];
        var seats=this.state.seats;
        //console.log(seats.length,seats[0].length)
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
        //console.log(ticketIndexs)
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
                    <div className={this.state.progressIndex===2?"step done":"step"}>
                        <span className={'step-num'}>3</span>
                        <div className={"bar"}/>
                        <span className={"step-text"}>14分钟内付款</span>
                    </div>
                    <div className={"step last"}>
                        <span className={'step-num'}>4</span>
                        <div className={"bar"}/>
                        <span className={"step-text"}>影院取票</span>
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
                                        <img src={this.state.movieinfo.picture} alt={this.state.movieinfo.name}/>
                                    </div>
                                    <div className="content">
                                        <p className={"name text-ellipsis"}>{this.state.movieinfo.name}</p>
                                        <div className={"info-item"}>
                                            <span>类型：</span>
                                            <span className={"value"}>{this.state.movieinfo.type}</span>
                                        </div>
                                        <div className={"info-item"}>
                                            <span>时长：</span>
                                            <span className={"value"}>{this.state.movieinfo.length}</span>
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
                                        {this.state.paipian.date+" "+this.state.paipian.starttime}
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
                                        <span className="price">{this.state.paipian.price*tickets.length}</span>
                                    </div>
                                </div>
                                <div className="confirm-order"/>
                            </div>
                        </div>: <div className="ticket-buy">
                            完成支付
                        </div>}
                </div>
            </div>

        </div>
    }
}
