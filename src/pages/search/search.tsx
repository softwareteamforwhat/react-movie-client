import React, {Component} from "react";
import Header from "../../components/header";

export default class Search extends Component<any, {}> {
    constructor(props) {
        super(props);
        console.log(props.match.params.text);
    }

    render() {
        return (
            <>
                <Header index={4}/>
                <div>Search!</div>
            </>
        );
    }
}