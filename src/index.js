import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import MouseTracker from './MouseTracker';
import * as serviceWorker from './serviceWorker';
// import Search from './Search';

// import ReactBeginnersError from './ReactBeginnersError';


// import StateLessFunctionalComponent from './StateLessFunctionalComponent';

// import ReVisitTicTacToe from './ReVisitTicTacToe';
//  import RobinRState from './RobinRState';
// import RobinAddItem from './RobinAddItem';
import RobinUpdateState from './RobinUpdateState'







// ReactDOM.render(<MouseTracker />, document.getElementById('root'));

// ReactDOM.render(<PureRender />, document.getElementById('root'));

// ReactDOM.render(<Search/>, document.getElementById('root'));


// ReactDOM.render(<ReactBeginnersError/>, document.getElementById('root'));


// ReactDOM.render(<StateLessFunctionalComponent/>, document.getElementById('root'));


// ReactDOM.render(<ReVisitTicTacToe/>, document.getElementById('root'));
// ReactDOM.render(<RobinRState/>, document.getElementById('root'));
ReactDOM.render(<RobinUpdateState/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
