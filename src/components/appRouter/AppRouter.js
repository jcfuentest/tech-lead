import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
 
  } from "react-router-dom";
import Detail from '../detalle/Detail';
import FindJobs from '../findjobs/FindJobs';
import Footer from '../footer/Footer';
import { Navbar } from '../navbar/Navbar';
import NotFoundJobs from '../notFoundJobs/NotFoundJobs';

const AppRouter = () => {
  return (
    <Router>
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={FindJobs} />
                <Route exact path="/notfound" component={NotFoundJobs} />
                <Route  exact path="/detail" component={Detail}/>
                <Redirect to="/"/>
            </Switch>
            <Footer/>
        </div>
    </Router>
  )
}

export default AppRouter