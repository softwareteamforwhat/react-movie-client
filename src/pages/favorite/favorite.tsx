import React from 'react';


/**
 * 注册的收藏夹组件
 */
export default class Favorite extends React.Component{
    
    getFakeData(){
        
    }
    
    render(){
        const numbers=[1,2,3,4,5];
        const listItems=numbers.map((number)=><li>{number}</li>);
        return (<ul>{listItems}</ul>);
    }
}