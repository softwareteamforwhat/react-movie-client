import React, {Component} from "react";
import {Carousel} from "antd";
import {Link} from "react-router-dom";
import {movieP} from "../../config/datastructures";
import './index.less';


export default class MyCarousel extends Component<{ moviePList: movieP[] }, any> {
    constructor(props) {
        super(props);
    }

    render() {
        const movie1 = this.props.moviePList[0].moviePhoto;
        const movie2 = this.props.moviePList[1].moviePhoto;

        return (
            <div className="my-picture">
                <Carousel style={{width:"71vw"}} autoplay={true} pauseOnFocus={true} fade={true}>
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
            </div>
        );
    }
}