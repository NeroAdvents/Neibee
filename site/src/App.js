import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import { Home } from "./js/HomePage.js";
import { Login } from "./js/login.js";
import { Register } from "./js/register.js"
import { Service } from "./js/ServicePage.js";
import { Dashboard } from "./js/Dashboard.js";
import {Information} from "./js/InformationPage.js";
import {DashboardService, Dashboard2} from "./js/DashboardService";


/*
Client apollo, test de wrapper l'app dans un apollo provider
 */
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

export const client = new ApolloClient({
    uri: "https://api.neibee.fr"
});

const HomePage = () => (
    <Home />
);

const LoginPage = () => (
    <Login />
);

const RegisterPage = () => (
    <Register />
);

const ServicePage = () => (
    <Service />
);

const DashboardPage = () => (
    <Dashboard />
);

const DashboardServicePage = () => (
    <Dashboard2/>
);

class App extends Component {
    componentDidMount(){
        document.title = "Neibee - Services entre voisins"
    }
    render() {
        return (
            <ApolloProvider client={client}>
                <Router>
                    <div>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/register" component={RegisterPage}/>
                        <Route path="/service" component={ServicePage}/>
                        <Route path="/dashboard" component={DashboardPage}/>
                        <Route path={"/dashboard/:id"} exact component={Information}/>
                        <Route path={"/dashboardService"} component={DashboardServicePage}/>
                    </div>
                </Router>
            </ApolloProvider>
        );
    }
}


export default App;
