import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
// import Axios from "axios";

import Header from "./Header";
import Dashboard from "./Dashboard";
import Invoice from "./Invoice";
import Production from "./Production";
import ProductReport from "./ProductReport";
import Landing from "./Landing";
// import { FETCH_USER } from '../actions/types';

class App extends Component{
    
    componentDidMount() {    
        this.props.fetchUser();
    }

    render(){
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header /> 
                        <Route exact path="/" component={Landing} />
                        <Route path="/Dashboard" component={Dashboard} />
                        <Route path="/Invoice" component={Invoice} />
                        <Route path="/ProductReport" component={ProductReport} />
                        <Route path="/Production" component={Production} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);