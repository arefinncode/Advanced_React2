import React, { Component } from 'react';
import logo from './logo.svg';
// import Sidebar from "react-sidebar";
import './App.css';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;
const Home = () => <h2>Home</h2>;
const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;
const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>

        <ul>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
        </ul>

        <Route path={`${match.path}/:id`} component={Topic} />
        <Route
            exact
            path={match.path}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
);



// const AppRouter = () => (
//     <Router>
//         <div>
//             <nav>
//                 <ul>
//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/about/">About</Link>
//                     </li>
//                     <li>
//                         <Link to="/users/">Users</Link>
//                     </li>
//                 </ul>
//             </nav>
//
//             <Route path="/" exact component={Index} />
//             <Route path="/about/" component={About} />
//             <Route path="/users/" component={Users} />
//         </div>
//     </Router>
// );


const App2 = () => (
    <Router>
        <div>
            <Header />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>
);


const Header = () => (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/topics">Topics</Link>
        </li>
    </ul>
);

// export default AppRouter;
// export AppRouter;


class App extends Component {
  render() {
    return (
      <div className="App">


        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

            <App2/>
        </header>
          {/*<Header/>*/}
        {/*<App2/>*/}

      </div>
    );
  }
}

export default App;
