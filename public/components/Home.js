import React, { Component } from 'react';
import * as actions from '../actions';
import {connect } from 'react-redux';
class Home extends Component {
    changeText(e) {
        this.props.changeText(e.target.value);
    }

    render() {
        return (
            <div>
                <h1>My react redux boilerplate</h1>
                <input type="text" onChange={this.changeText.bind(this)} />
                <p>{this.props.randomString}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const randomString = state.getIn(['home', 'randomString']);

    return {
        randomString
    }
}

export default connect(mapStateToProps, actions, null, { pure: false })(Home);