import React from 'react';
import './index.css';
import Welcome from '../Welcome/index';
import SignIn from '../SignIn/index';

class Home extends React.Component{
    render(){
        return(
            <div className="Home__page">
                <Welcome />
                <SignIn />
            </div>
        )
    };
};

export default Home;
