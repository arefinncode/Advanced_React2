import React from 'react';

// const list = [1, 2, 3];

const INITIAL_STATE = {
    list: [1, 2, 3],
};

class RobinRState extends React.Component {
    constructor(props) {
        super(props);

      //  this.state = {
            // list: [1, 2, 3],

            // list,

      //  };
        this.state = INITIAL_STATE;
    }

    onClearArray = () => {
        this.setState({ list: [] });
    };


    // onResetArray = () => {
    //     // this.setState({ list });
    //     this.setState({ list:list });
    // };

    onResetArray = () => {
        // this.setState({ ...INITIAL_STATE });
        this.setState({...INITIAL_STATE });
    };


    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <button type="button" onClick={this.onClearArray}>
                    Clear Array
                </button>

                <button type="button" onClick={this.onResetArray}>
                    Reset Array
                </button>


            </div>
        );
    }
}

export default RobinRState;