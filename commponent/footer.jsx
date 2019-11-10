import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <span><NavLink to='/shop'>购物车</NavLink></span>
        <span><NavLink to='/eaxm'>考试</NavLink></span>
        <span><NavLink to='/my'>我的</NavLink></span>
      </div>
    )
  }
}
export default Footer
