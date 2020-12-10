import React, {Component} from 'react';
import Header from "../../components/header";
import {Link} from "react-router-dom";
import './cinemas.less';


class TagCell extends Component {
    constructor(props) {
        super(props);
        this.changeCinemaState = this.changeCinemaState.bind(this);
    }

    changeCinemaState(index) {
        this.props.changeCinemaState(index, this.props.type);
    }

    render() {
        if (this.props.selected) {
            return <button className="tag selected">{this.props.value}</button>
        } else {
            return <button className="tag"
                           onClick={() => this.changeCinemaState(this.props.index)}>{this.props.value}</button>
        }
    }
}

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.changeCinemaState = this.changeCinemaState.bind(this);
    }

    changeCinemaState(index, type) {
        this.props.changeCinemaState(index, type);
    }

    render() {
        const brandList = this.props.brands.map(
            (brand, index) =>
                <TagCell
                    key={index}
                    selected={index === this.props.selectedBrandIndex}
                    value={brand}
                    index={index}
                    changeCinemaState={this.changeCinemaState}
                    type={1}
                />
        );
        const areaList = this.props.areas.map(
            (area, index) =>
                <TagCell
                    key={index}
                    selected={index === this.props.selectedAreaIndex}
                    value={area}
                    index={index}
                    changeCinemaState={this.changeCinemaState}
                    type={2}
                />
        );
        const tagList = this.props.tags.map(
            (tag, index) =>
                <TagCell
                    key={index}
                    selected={index === this.props.selectedTagIndex}
                    value={tag}
                    index={index}
                    changeCinemaState={this.changeCinemaState}
                    type={3}
                />
        );
        const sortTypeList = this.props.sortTypes.map(
            (sortType, index) =>
                <TagCell
                    key={index}
                    selected={index === this.props.selectedSortTypeIndex}
                    value={sortType}
                    index={index}
                    changeCinemaState={this.changeCinemaState}
                    type={4}
                />
        );

        return <div className="search-bar">
        <div className="tags-lines">
            <div className="tags-line">
                <div className="tags-title">品牌 :</div>
                <div className="tags">
                    {brandList}
                </div>
            </div>
            <div className="tags-line">
                <div className="tags-title">区域 :</div>
                <div className="tags">
                    {areaList}
                </div>
            </div>
            <div className="tags-line">
                <div className="tags-title">标签 :</div>
                <div className="tags">
                    {tagList}
                </div>
            </div>
            <div className="tags-line">
                <div className="tags-title">排序 :</div>
                <div className="tags">
                    {sortTypeList}
                </div>
            </div>
        </div>
        </div>
    }
}

class CinemaPanel extends Component{

    render() {
        return <div className="cinemas-list">
            <h2 className="cinemas-list-header">
                <span>影院列表</span>
            </h2>
            {this.props.cinemas.map(
                (cinema,index)=>
                    <div className="cinemas-cell" key={index}>
                        <div className="cinema-info">
                            <Link to={{
                                pathname:"/cinemainfo",
                                id:cinema.id
                            }}>
                                <button className="cinema-name">{cinema.name}</button>
                            </Link>
                            <p className="cinema-address">{cinema.address}</p>
                            <div className="cinema-tags">
                                {cinema.service.map(
                                    (service,index)=>
                                        <span className="cinema-tag" key={index}>{service.name}</span>
                                )}
                            </div>
                        </div>
                        <div className="buy-btn">
                            <Link to={{
                                pathname:"/cinemainfo",
                                id:cinema.id
                            }}>
                                <button>选座购票</button>
                            </Link>

                        </div>
                        <div className="price">
                            <span className="rmb red">￥</span>
                            <span className="price-num red">{cinema.price}</span>
                            <span>起</span>
                            <span className="cinema-distance">{cinema.distance}</span>
                        </div>
                    </div>
            )}

        </div>
    }

}
export default class Cinemas extends Component {
    constructor(props) {
        super(props);
        var cinemas=[
            {
                id:1,
                picture: "https://p1.meituan.net/deal/201208/22/1_0822151022.jpg@292w_292h_1e_1c",
                name: "中宁国际影城（京新广场店）",
                address: "浦口区柳洲东路189号京新广场4楼",
                phone: "电话：025-58860601",
                price:30,
                distance:"1km",
                service: [
                    {
                        name:"退",
                        text:"未取票用户放映前60分钟可退票"
                    },
                    {
                        name:"改签",
                        text:"未取票用户放映前60分钟可改签"
                    },
                    {
                        name:"3D眼镜",
                        text:"免押金"
                    },
                    {
                        name:"可停车",
                        text:"商场免费停车"}
                ]},
            {
                id:2,
                picture: "https://p1.meituan.net/deal/201208/22/1_0822151022.jpg@292w_292h_1e_1c",
                name: "中宁国际影城（京新广场店）",
                address: "浦口区柳洲东路189号京新广场4楼",
                phone: "电话：025-58860601",
                price:30,
                distance:"1km",
                service: [
                    {
                        name:"退",
                        text:"未取票用户放映前60分钟可退票"
                    },
                    {
                        name:"改签",
                        text:"未取票用户放映前60分钟可改签"
                    },
                    {
                        name:"3D眼镜",
                        text:"免押金"
                    },
                    {
                        name:"可停车",
                        text:"商场免费停车"}
                ]},
            {
                id:3,
                picture: "https://p1.meituan.net/deal/201208/22/1_0822151022.jpg@292w_292h_1e_1c",
                name: "中宁国际影城（京新广场店）",
                address: "浦口区柳洲东路189号京新广场4楼",
                phone: "电话：025-58860601",
                price:30,
                distance:"1km",
                service: [
                    {
                        name:"退",
                        text:"未取票用户放映前60分钟可退票"
                    },
                    {
                        name:"改签",
                        text:"未取票用户放映前60分钟可改签"
                    },
                    {
                        name:"3D眼镜",
                        text:"免押金"
                    },
                    {
                        name:"可停车",
                        text:"商场免费停车"}
                ]},
            {
                id:4,
                picture: "https://p1.meituan.net/deal/201208/22/1_0822151022.jpg@292w_292h_1e_1c",
                name: "中宁国际影城（京新广场店）",
                address: "浦口区柳洲东路189号京新广场4楼",
                phone: "电话：025-58860601",
                price:30,
                distance:"1km",
                service: [
                    {
                        name:"退",
                        text:"未取票用户放映前60分钟可退票"
                    },
                    {
                        name:"改签",
                        text:"未取票用户放映前60分钟可改签"
                    },
                    {
                        name:"3D眼镜",
                        text:"免押金"
                    },
                    {
                        name:"可停车",
                        text:"商场免费停车"}
                ]},
            {
                id:4,
                picture: "https://p1.meituan.net/deal/201208/22/1_0822151022.jpg@292w_292h_1e_1c",
                name: "中宁国际影城（京新广场店）",
                address: "浦口区柳洲东路189号京新广场4楼",
                phone: "电话：025-58860601",
                price:30,
                distance:"1km",
                service: [
                    {
                        name:"退",
                        text:"未取票用户放映前60分钟可退票"
                    },
                    {
                        name:"改签",
                        text:"未取票用户放映前60分钟可改签"
                    },
                    {
                        name:"3D眼镜",
                        text:"免押金"
                    },
                    {
                        name:"可停车",
                        text:"商场免费停车"}
                ]},
        ];
        var brands=["全部", "幸福蓝海国际影城", "万达影城", "卢米埃影城", "中影国际影城", "金逸影城", "横店影视", "上影国际影城",
            "华夏国际影城", "大地影院", "海上国际影城", "中传国际影城", "喜满客影城", "UME国际影城", "耀莱成龙国际影城",
            "中影星美国际影城",
            "CGV影城", "星星国际影城", "苏宁影城", "诚丰影城", "星河国际影城", "沃美影城", "星美国际影城", "保利国际影城",
            "博纳国际影城", "星轶starx影城",
            "中影UL城市影院", "新华国际影城", "华纳国际影城", "幸福蓝海国际影城", "银河欢乐影城", "SFC上影影城", '横店影视' ,
            "星轶imax影城" ,"其他"];

        var areas=['全部', '地铁附近', '江宁区', '秦淮区' ,'浦口区' ,'雨花台区', '六合区', '栖霞区',
            '鼓楼区', '建邺区' ,'玄武区', '溧水区', '高淳区'];
        var tags=[
            '全部', '可改签' ,'可退票', 'IMAX厅', 'CGS中国巨幕厅', '杜比全景声厅', 'Dolby Cinema厅', 'RealD厅' ,'RealD 6FL厅 ',
            '4DX厅', 'DTS:X 临境音厅', '儿童厅','4K厅', '4D厅', '60帧厅', '120帧/4K厅','巨幕厅', 'STARX厅', 'MX4D厅'
        ];
        var sortTypes=["距离最近","价格最低"];
        this.state = {
            cinemas:cinemas,
            brands:brands,
            areas: areas,
            tags:tags,
            sortTypes: sortTypes,
            selectedCinemaIndex: 0,
            selectedBrandIndex: 0,
            selectedAreaIndex: 0,
            selectedTagIndex: 0,
            selectedSortTypeIndex: 0,
        };
        this.updateCinemaList = this.updateCinemaList.bind(this);
        this.changeCinemaState = this.changeCinemaState.bind(this);
    }

    updateCinemaList() {
        console.log(this.state)
    }

    changeCinemaState(index, type) {
        if (type === 1) {
            this.setState(
                {selectedBrandIndex: index},
                () => this.updateCinemaList()
            )
        } else if (type === 2) {
            this.setState(
                {selectedAreaIndex: index},
                () => this.updateCinemaList()
            )
        } else if (type === 3) {
            this.setState(
                {selectedTagIndex: index},
                () => this.updateCinemaList()
            )
        } else if (type === 4) {
            this.setState(
                {selectedSortTypeIndex: index},
                () => this.updateCinemaList()
            )
        } else {

        }

    }

    render() {
        return (
            <div >
                <Header index={2}/>
                <div className="cinemas">
                    <SearchBar
                        brands={this.state.brands}
                        selectedBrandIndex={this.state.selectedBrandIndex}
                        areas={this.state.areas}
                        selectedAreaIndex={this.state.selectedAreaIndex}
                        tags={this.state.tags}
                        selectedTagIndex={this.state.selectedTagIndex}
                        sortTypes={this.state.sortTypes}
                        selectedSortTypeIndex={this.state.selectedSortTypeIndex}
                        changeCinemaState={this.changeCinemaState}
                    />
                    <CinemaPanel
                        cinemas={this.state.cinemas}
                    />
                </div>


            </div>

        );
    }

}
