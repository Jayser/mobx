import './Counter.scss';

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import DevTool from 'mobx-react-devtools';

// make observable array

const appState = observable({
    count: 0,
});

appState.increment = function () {
    this.count++;
};
appState.decrement = function () {
    this.count--;
};

@observer
class Counter extends Component {
    render() {
        return (
            <div>
                <DevTool />
                <div className="counter">{ appState.count }</div>
                <button onClick={ appState.increment.bind(appState) }>+</button>
                <button onClick={ appState.decrement.bind(appState) }>-</button>
            </div>
        );
    }
}

export default Counter;
