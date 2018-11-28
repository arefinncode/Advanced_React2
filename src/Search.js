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

export default class Search extends React.Component {

    constructor() {
        super();

        this.state = {
            singleJourney: false
        };

        this.handleButtonChange = this.handleButtonChange.bind(this);
    }

    handleButtonChange(value) {
        this.setState({
            singleJourney: value
        });
    }

    render() {

        return (
            <Form>

                <Well style={{color:'green'}}>

                    <FormGroup className="text-center">

                        <ButtonGroup>
                            <Button href="#" active={!this.state.singleJourney} onClick={this.handleButtonChange(false)} >Retour</Button>
                            <Button href="#" active={this.state.singleJourney} onClick={this.handleButtonChange(true)} >Single Journey</Button>
                        </ButtonGroup>
                    </FormGroup>

                </Well>

            </Form>
        );
    }
}


// export default Search;
// module.exports =