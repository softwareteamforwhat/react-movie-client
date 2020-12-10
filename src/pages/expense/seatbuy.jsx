import React,{Component} from 'react';
import Header from "../../components/header";
import './seatbuy.less';

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
            seats:seats
        }

    }

    render(){
        return <div className="seat-buy">
            <Header index={-1}/>

        </div>
    }
}
