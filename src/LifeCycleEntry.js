import React, { Component } from 'react';

import Counter from './LifeCycleCounter';

import './App.css';


class LifeCycleEntry extends Component {
    render() {
        return (
            <div>
                <Counter/>
            </div>
        );
    }
}

export default LifeCycleEntry;
