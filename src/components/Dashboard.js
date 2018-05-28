import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <button onClick={e => {
                    this.props.increment(this.props.value || 0)
                }}>
                    +
                </button>
                <button onClick={e => {
                    this.props.decrement(this.props.value || 0)
                }}>
                    -
                </button>

                <h2> {this.props.value || 0}</h2>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        value: state.reducer.value
    }
}

export default connect(mapStateToProps, actions)(Dashboard)
