import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import Acount from './component/Acount'
import Information from './component/Information'
import Privilege from './component/Privilege'
import Acount2 from './component/Account2'





export default class App extends React.Component  {
  renderRouter(){
    return(
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/Acount" exact component={Acount2}></Route>
        <Route path="/Information" exact component={Information}></Route>
        <Route path="/Privilege" exact component={Privilege}></Route>
      </Switch>
    )
  }

  render(){
    return(
      <BrowserRouter>
        {this.renderRouter()}
      </BrowserRouter>
    )
  }
}