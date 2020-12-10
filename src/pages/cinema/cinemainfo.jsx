import React from 'react';
import './cinemainfo.less'
import Header from "../../components/header";

export default class CinemaInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.location.id
        }
    }

    render() {
        return <div>
            <Header index={1}/>
            <div>{this.state.id}</div>
        </div>
    }
}
