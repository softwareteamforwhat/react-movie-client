import React, {Component} from "react";
import {Carousel,Button} from "antd";
import {Link} from "react-router-dom";
import {movieP} from "../../config/datastructures";
import './index.less';
import {LeftOutlined,RightOutlined} from '@ant-design/icons'
export default class MyCarousel extends Component<{ moviePList: movieP[] }, any> {

    private img: any;
    constructor(props:any){
        super(props);
        this.state={};
        this.img = undefined
    }
    prev(){
        this.img.prev();
    }
    next(){
        this.img.next();
    }

    render() {
        const movie1 = this.props.moviePList[0].moviePhoto;
        const movie2 = this.props.moviePList[1].moviePhoto;
        return (
            <div className="my-picture">
                <Button type="primary" ghost className="g-button" onClick={this.prev.bind(this)} ><LeftOutlined /></Button>
                <Carousel ref={dom => { this.img = dom; }} style={{width:"71vw"}} autoplay={true} pauseOnFocus={true} fade={true}>
                    <div className="photo">
                        <Link to={{
                            pathname: "/movieinfo",
                            state: {id: this.props.moviePList[0].movieId}
                        }}>
                            <div className="movie-click"
                                 style={{backgroundImage: `url(${movie1})`,backgroundSize: "71vw 22vw"}}/>

                        </Link>
                    </div>
                    <div className="photo">
                        <Link to={{
                            pathname: "/movieinfo",
                            state: {id: this.props.moviePList[1].movieId}
                        }}>
                            <div className="movie-click" style={{background: `url(${movie2})`,backgroundSize: "71vw 22vw"}}/>
                        </Link>
                    </div>
                </Carousel>
                <Button type="primary" ghost className="g-button" onClick={this.next.bind(this)} ><RightOutlined /></Button>
            </div>
        );
    }
}