import React from 'react';
import FollowerCard from './FollowerCards';

class Followers extends React.Component{
    constructor(){
        super();
        this.state = {
            followersData: []
        }
    }

    render(){
        return <FollowerCard/>
    }
};

export default Followers;