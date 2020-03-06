import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div>
            <h2>Footer</h2>
            <Route path='/' exact render={() => (
                <p>You are in <span>Home page</span></p>
            )} />
            <Route path='/:page' exact render={(props) => (
                <p>You are in <span>{props.match.params.page}</span></p>
            )} />
            <Route path='/:page/:id' exact render={(props) => (
                <p>You are in <span>{props.match.params.id}</span></p>
            )} />
        </div>
    );
}

export default Footer;