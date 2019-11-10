import React, { Component } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Index from '../view/exam11'
import Shop from '../view/shop'
import My from '../view/my'
import Exam from '../view/eaxm'
import Login from '../view/login'
import Detail from '../view/detail'
class Router extends Component {
  render() {
    return <div>
      <BrowserRouter>
        <Switch>
          <Route path='/exam11' component={Index}></Route>
          <Route path='/shop' component={Shop}></Route>
          <Route path='/my' component={My}></Route>
          <Route path='/eaxm' component={Exam}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/detail/:id' component={Detail}></Route>
          <Redirect from='/' to='/shop'></Redirect>
        </Switch>
      </BrowserRouter>
    </div>
  }
}
export default Router