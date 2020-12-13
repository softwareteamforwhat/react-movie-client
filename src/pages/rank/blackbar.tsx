import React, {Component, Fragment} from 'react';
import './blackbar.less';

export default class BlackBar extends Component<{ index: number }, { color: string[] }> {
    constructor(props) {
        super(props);
        this.state = {
            color: ["#999999", "#999999"]
        }
        this.state.color[this.props.index] = "#EF4238";
    }

    render() {
        const color = this.state.color;
        return (
            <Fragment>
                <div style={{height: "60px", backgroundColor: "#47464A"}} className="b-header">
                    <ul className="navbar">
                        <li><a style={{color: color[0]}} href="/rank/follow">
                            <div>最受期待榜</div>
                        </a></li>
                        <li><a style={{color: color[1]}} href="/rank/top">
                            <div>TOP100榜</div>
                        </a></li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}