import React from 'react';



export default class MovieInfo extends React.Component{




    render(){
        console.log(this.props.location);
        const numbers=[1,2,3,4,5];
        const listItems=numbers.map((number)=><li key={number}>{number}</li>);
        return (<ul>{listItems}</ul>);
    }
}
