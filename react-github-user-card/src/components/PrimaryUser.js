import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import Followers from './Followers';

class PrimaryUser extends React.Component{
    constructor(){
        super();
        this.state = {
            primaryData: {}
        }
    };

    componentDidMount(){
        axios
        .get('https://api.github.com/users/arizephyr123')
        .then(res => {
            console.log(res.data);
            this.setState({
                primaryData: res.data
            });
            console.log(this.state.primaryData);
            
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <>
            <div>
                <UserCard primaryData={this.state.primaryData}/>
            </div>
            <div>
                <Followers primaryData={this.state.primaryData}/>
            </div>
            </>
        )
    }

};

export default PrimaryUser;