import {Component} from "react";
import {Link} from "react-router-dom";
import React from "react";
import './moviecell.less'

export default class MovieCell extends Component{
    render() {
        return <div className="movie-cell">
            <div className="movie-item">
                <Link to={{
                    pathname:"/movieinfo",
                    state:{
                        id:this.props.movie.movieId
                    }
                }}>
                    <div className="movie-poster">
                        <img className="poster-default" alt={this.props.movie.c_name} src={this.props.movie.picture}/>
                    </div>
                </Link>
            </div>
            <div className="movie-title">{this.props.movie.c_name}</div>
        </div>
    }
}
