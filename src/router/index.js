import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from '../components/layout/NavigationBar';
import Home  from '../components/Home';
import LiveChart from "../components/LiveChart"

export const RouterPage = ()=>{
    return (
        <>
        <Router >
        <NavigationBar />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/liveChart" component={LiveChart} />
          </Switch>
        </Router>
        </>
    )
}