import React, { Component } from 'react';
import logo from './logo.svg';
// import Sidebar from "react-sidebar";
import './App.css';
import Home2 from './Home2';
import RenderProps from './Renderprops';



import { BrowserRouter as Router, Route, Link, Redirect,NavLink,
    withRouter } from "react-router-dom";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;
// const Home = () => <h2>Home</h2>;
// const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;
// const Topics = ({ match }) => (
//     <div>
//         <h2>Topics</h2>
//
//         <ul>
//             <li>
//                 <Link to={`${match.url}/components`}>Components</Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//             </li>
//         </ul>
//
//         <Route path={`${match.path}/:id`} component={Topic} />
//         <Route
//             exact
//             path={match.path}
//             render={() => <h3>Please select a topic.</h3>}
//         />
//     </div>
// );



const AppRouter = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li>
                    <li>
                        <NavLink to="/Home2/">Home2</NavLink>
                    </li>
                    <li>
                        <NavLink to= "/RenderProps/" >Renderprops </NavLink>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
            <Route path="/Home2/" component={Home2} />
            <Route path="/RenderProps/" component={RenderProps} />


             {/*fakeAuth.isAuthenticated ? (*/}
                 {/*<Component {...props} />*/}
             {/*) :*/}
            {/*{...rest}*/}
            {/*<Route*/}
                {/*path="/Home2/"*/}
                {/*render={props =>(*/}
                    {/*<component = {Home2} />*/}
                        {/*<Redirect*/}
                            {/*to={{*/}
                                {/*pathname: "/Home2"*/}
                                {/*// state: { from: props.location }*/}
                            {/*}}*/}
                        {/*/>*/}
                    {/*)*/}
                {/*}*/}
            {/*/>*/}
            {/*<Route exact render={() => (*/}
                {/*1===2? (*/}

                    {/*<Redirect to="Home2"/>*/}
                    {/*// <Redirect to="Home2"/>*/}
                {/*) : (*/}
                    {/*<Home2/>*/}
                {/*)*/}
            {/*)}/>*/}

            {/*<Route*/}
                {/*exact path=".Home2"*/}
                {/*render={() => (*/}
                    {/*<Redirect*/}
                        {/*to={{*/}
                            {/*pathname: ".Home2"*/}
                            {/*// search: "?utm=your+face",*/}
                            {/*// state: { referrer: currentLocation }*/}
                        {/*}}*/}
                    {/*/>)*/}
                {/*}*/}

            {/*component={Home2}*/}

             {/*/>*/}

            {/*<Route*/}
                {/*exact path=".Renderprops"*/}
                {/*render={() => (*/}
                    {/*<Redirect*/}
                        {/*to={{*/}
                            {/*pathname: ".Renderprops"*/}
                            {/*// search: "?utm=your+face",*/}
                            {/*// state: { referrer: currentLocation }*/}
                        {/*}}*/}
                    {/*/>)*/}
                {/*}*/}

                {/*component={RenderProps}*/}

            {/*/>*/}

            {/*<Router*/}
                {/*//basename={optionalString}*/}
                {/*forceRefresh={true}*/}
                {/*getUserConfirmation={true}*/}
                {/*// keyLength={optionalNumber}*/}
            {/*>*/}
                {/*<Home2/>*/}
            {/*</Router>*/}


        </div>
    </Router>
);


// const App2 = () => (
//     <Router>
//         <div>
//             <Header />
//
//             <Route exact path="/" component={Home} />
//             <Route path="/about" component={About} />
//             <Route path="/topics" component={Topics} />
//         </div>
//     </Router>
// );
//
//
// const Header = () => (
//     <ul>
//         <li>
//             <Link to="/">Home</Link>
//         </li>
//         <li>
//             <Link to="/about">About</Link>
//         </li>
//         <li>
//             <Link to="/topics">Topics</Link>
//         </li>
//     </ul>
// );

// export default AppRouter;
// export AppRouter;


function AuthExample() {
    return (
        <Router>
            <div>
                <AuthButton />
                <ul>
                    <li>
                        <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>
                <Route path="/public" component={Public} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/protected" component={Protected} />
            </div>
        </Router>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const AuthButton = withRouter(
    ({ history }) =>
        fakeAuth.isAuthenticated ? (
            <p>
                Welcome!{" "}
                <button
                    onClick={() => {
                        fakeAuth.signout(() => history.push("/"));
                    }}
                >
                    Sign out
                </button>
            </p>
        ) : (
            <p>You are not logged in.</p>
        )
);

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                fakeAuth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

function Public() {
    return <h3>Public</h3>;
}

function Protected() {
    return <h3>Protected</h3>;
}

class Login extends React.Component {
    state = { redirectToReferrer: false };

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };
    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;

        if (redirectToReferrer) return <Redirect to={from} />;

        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        );
    }
}

// export default AuthExample;



class App extends Component {


    state = {
        redirect: false
    }



    render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

            <AppRouter/>

            <AuthExample/>
        </header>
          {/*<Header/>*/}
        {/*<App2/>*/}

      </div>
    );
  }
}

export default App;
