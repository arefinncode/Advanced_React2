import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

// { Component }


class RobinUpdateState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [42, 33, 68],
        };
    }

    // for everyitem

    onUpdateItems = () => {
        this.setState(state => {
            const list = state.list.map(item => item + 1);

            return {
                list,
            };
        });
    };

    // for singleitem

    onUpdateItem = i => {
        this.setState(state => {
            const list = state.list.map((item, j) => {
                if (j === i) {
                    return item + 1;
                } else {
                    return item;
                }
            });

            return {
                list,
            };
        });
    };

    onRemoveItem = i => {
        this.setState(state => {
            const list = state.list.filter((item, j) => i !== j);

            return {
                list,
            };
        });
    };




    render() {
        return (
            <div>
                <ul>
                    {/*{this.state.list.map(item => (*/}
                    {/*every item above */}
                    {/*<li key={item}>The person is {item} years old.</li>*/}

                    {/*single item*/}
                    {this.state.list.map((item, index) => (




                            // old above new below

                            <li key={item}>
                                The person is {item} years old.

                                <button
                                    type="button"
                                    onClick={() => this.onUpdateItem(index)}

                                >
                                    Make me one year older

                                </button>
                                <button
                                    type="button"
                                    onClick={() => this.onRemoveItem(index)}
                                >
                                    Remove
                                </button>

                            </li>

                        )
                    )
                    }
                </ul>

                <button type="button" onClick={this.onUpdateItems}>
                    Make everyone one year older
                </button>




            </div>
        );
    }
}

export default RobinUpdateState;