import React, {useState} from "react";
import {HeartFilled} from '@ant-design/icons';
import {Button} from "antd";
import {apiChangeFollow} from "../../api";
import './index.less';

const starList: any[] = [<div className="btn-content"><HeartFilled style={{fontSize: 20, color: "white"}}/>收藏</div>,
    <div className="btn-content"><HeartFilled style={{fontSize: 20, color: "red"}}/>取消收藏</div>]
const changeFollow = async (id: number, followId: string, token: string) => {
    await apiChangeFollow(id, followId,token);
}
// hasFollowed代表是否被收藏
// type 0代表行业，1代表股票；
// id代表行业/股票的id
const MyFollow = (props: { hasFollowed: boolean, id: string }) => {
    const [star, setStar] = useState(props.hasFollowed);
    const followId: string = props.id;
    console.log("myFollow",props.hasFollowed)
    return (
        <div className={"follow-area"}>
            <Button style={{padding: 4,backgroundColor:"#756189",color:"white",width:100}} onClick={() => {
                setStar(!star);
                let id:number = Number(localStorage.getItem('id'));
                let token:string = localStorage.getItem('token') || "";
                console.log(id, token, followId);
                changeFollow(id, followId, token);
            }}>
                {star ? starList[1] : starList[0]}
            </Button>
        </div>

    );

}
export default MyFollow;
