import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Contact from './components/Contact'

export default class App extends Component {
    render() {
        return (
            <div>
                <nav style={{ display: "flex", justifyContent: "space-around" }}>
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="contact">Contact</Link>
                </nav>
                <div>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
            </div>
        )
    }
};
