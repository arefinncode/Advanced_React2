// var React = require('react');
// import MouseTracker from "./MouseTracker";



import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Redirect,NavLink,
//     withRouter } from "react-router-dom";
//
// const Index = () => <h2>Home</h2>;
// const About = () => <h2>About</h2>;
// const Users = () => <h2>Users</h2>;


export default class ReactBeginnersError extends Component {

    constructor(props) {
        super(props);
        // this._changeValue=this._changeValue();
        this.state = {
            x : 1
        };

        // this.state = {date: new Date()};


        // this.setState({
        //     date: new Date()
        // });

    }


    // Error stateless function can't change state.
    _changeValue(newValue){
        // this.setState({newValue});
        this.setState({x:newValue});

        // console.log("x is  : " ,this.state.x);

       // <Route path="/about/" component={About} />
    }

    render() {


        return (
            <div>
                <h2>X is now:  {this.state.x}</h2>

                <button style={{color:'green'}} onClick={this._changeValue.bind(2)}>Change Value</button>

            </div>
        )
    }

}



