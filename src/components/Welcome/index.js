import React from 'react';
import './index.css';
import logo from './logo-2x.png';

class Welcome extends React.Component{
    render(){
        return(
            <div className="welcome">
                <div className="welcome-container">
                <div className="welcome-container__content">
                    <header className="welcome-container__content__header">
                        <img src={logo} className="welcome-container__header__logo" alt="logo"/>
                    </header>
                    <h1 className="welcome-container__header__text">Hi,
                        <br/> Welcome on Dimtech.
                        </h1>
                    <div className="welcome-container__description">
                        <p className="welcome-container__description__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure
    dolor in reprehenderit.</p>
                    </div>
                    <div className="welcome-container__button">
                    <button className="welcome-container__btn" type="button">Learn More</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default Welcome;
