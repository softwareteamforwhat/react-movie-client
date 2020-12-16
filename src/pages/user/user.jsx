import React from 'react';
import Header from '../../components/header';

export default class UserPage extends React.Component{

    render(){
        return (
            <div>
                <Header index={1}/>
                <UserPanel/>
            </div>
        );
    }
    
}

class UserPanel extends React.Component{

    render(){
        return (
            <div>
                <h1>个人中心</h1>
            </div>
        );
    }
}