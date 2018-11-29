import React, { Component } from 'react';

// import logo from './logo.svg';
import {
    // ButtonGroup,
    // Button,
    Form,
    // FormGroup,
    // Well
} from "react-bootstrap";

// const NewItemForm = props => (
//     <Form onSubmit={props.send_form}>
//         <Form.Group>
//             <TextArea
//                 placeholder='Name your first item here'
//                 name='item_msg'
//                 onChange={e => this.setState({ item_msg: e.target.value })} />
//             <Form.Button primary content='Create Item' />
//         </Form.Group>
//     </Form>
// )
//
// class StateLessFunctionalComponent extends Component {
//     constructor () {
//         super();
//         this.state = {
//             item_msg: ''
//         }
//     }
//
//     handleSubmit(e){
//         e.preventDefault();
//
//         console.log(this.state.item_msg);
//     }
//
//     render() {
//         return (
//             <div className="App">
//                 <MainHeaderr />
//                 <Container>
//                     <NewItemForm send_form={this.handleSubmit.bind(this)} />
//                 </Container>
//             </div>
//         );
//     }
// }


const NewItemForm = props => (
    <Form onSubmit={props.send_form}>
        {/*<Form.Group>*/}
        {/*<Form.Button primary content='Create Item' />*/}

            {/*<label>*/}
                {/*Name:*/}
                {/*<input type="text" name="name" />*/}
            {/*</label>*/}

            <textarea
                placeholder='Name your first item here'
                name='item_msg'
                onChange={props.onInputChange} />
                <br/>
                <br/>
                <br/>
                <br/>

            <input type="submit" value="Submit" />
        {/*</Form.Group>*/}
    </Form>
)

class StateLessFunctionalComponent extends Component {
    constructor () {
        super();
        this.state = {
            item_msg: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.item_msg);
    }
    handleInputChange(e) {
        this.setState({ item_msg: e.target.value })
    }

    render() {
        return (
            <div>
                    <div>
                    <NewItemForm
                        send_form={this.handleSubmit}
                        onInputChange={this.handleInputChange}
                    />
                    </div>
            </div>
        );
    }
}

export default StateLessFunctionalComponent;