

// var React = require('react');
import MouseTracker from "./MouseTracker";

// var ButtonGroup = require('react-bootstrap/lib/ButtonGroup');
// var Button = require('react-bootstrap/lib/Button');
// var Form = require('react-bootstrap/lib/Form');
// var FormGroup = require('react-bootstrap/lib/FormGroup');
// var Well = require('react-bootstrap/lib/Well');


import React, { Component } from 'react';
import logo from './logo.svg';
import {ButtonGroup,Button,Form,FormGroup,Well} from "react-bootstrap";

// react-bootstrap

export default class ReactBeginnersError extends React.Component {

    constructor(props) {
        super(props);
        // this._changeValue=this._changeValue();
        this.state = {
            x : 1
        };
    }

    _changeValue(newValue){
        // this.setState({newValue});
        this.setState({x:newValue});
    }

    render() {
        return <a style={{color:'green'}} onClick={this._changeValue.bind(2)}>Change Value</a>
    }

}



