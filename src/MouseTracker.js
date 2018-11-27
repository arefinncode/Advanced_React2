import React, { Component } from 'react';
import logo from './logo.svg';
// import Sidebar from "react-sidebar";
import './App.css';
import Home2 from './Home2';
import RenderProps from './Renderprops';
import cat from './about/cat.jpg';



import { BrowserRouter as Router, Route, Link, Redirect,NavLink,
    withRouter } from "react-router-dom";


// VERSION 01

// The <Mouse> component encapsulates the behavior we need...
// class Mouse extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleMouseMove = this.handleMouseMove.bind(this);
//         this.state = { x: 0, y: 0 };
//     }
//
//     handleMouseMove(event) {
//         this.setState({
//             x: event.clientX,
//             y: event.clientY
//         });
//     }
//
//     render() {
//         return (
//             <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
//
//                 {/* ...but how do we render something other than a <p>? */}
//                 <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
//             </div>
//         );
//     }
// }
//
// class MouseTracker extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Move the mouse around!</h1>
//                 <Mouse />
//             </div>
//         );
//     }
// }

// version03

//
// class Cat extends React.Component {
//     render() {
//         const mouse = this.props.mouse;
//         return (
//             <img src={cat} width={40} height={40} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt={"A Cat"} />
//         );
//     }
// }
//
// class MouseWithCat extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleMouseMove = this.handleMouseMove.bind(this);
//         this.state = { x: 0, y: 0 };
//     }
//
//     handleMouseMove(event) {
//         this.setState({
//             x: event.clientX,
//             y: event.clientY
//         });
//     }
//
//     render() {
//         return (
//             <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
//
//                 {/*
//           We could just swap out the <p> for a <Cat> here ... but then
//           we would need to create a separate <MouseWithSomethingElse>
//           component every time we need to use it, so <MouseWithCat>
//           isn't really reusable yet.
//         */}
//                 <Cat mouse={this.state} />
//             </div>
//         );
//     }
// }
//
// class MouseTracker extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Move the mouse around!</h1>
//                 <MouseWithCat />
//             </div>
//         );
//     }
// }


class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (


        <img src={cat}
             width={40} height={40}
             style={{ position: 'absolute',
                 left: mouse.x, top: mouse.y }}
             alt={"A Cat"}
        />

        );

        // IN return( {<img src="/cat.jpg" style={{ position: 'absolute', left:
        // mouse.x, top: mouse.y }} />});
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>

                {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
                {this.props.render(this.state)}
            </div>
        );
    }
}

class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )}/>
            </div>
        );
    }
}

export default MouseTracker;
