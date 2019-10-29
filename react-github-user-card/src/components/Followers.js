import React from 'react';
import UserCard from './UserCard';

class Followers extends React.Component{
    constructor(){
        super();
        this.state = {
            followersData: []
        }
    }

    render(){
        return <UserCard/>
    }
};

export default Followers;