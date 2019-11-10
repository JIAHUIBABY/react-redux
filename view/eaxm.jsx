import React, { Component } from 'react'
import Footer from '../commponent/footer'
import {NavLink} from 'react-router-dom'
 class Eaxm extends Component {
   state={
     data:["考试","练习题","错题"]
   }
  render() {
    let{data}=this.state;
    return (
      <div className='wrap'>
     {
       data.map((item,index)=><p key={index}><NavLink to='/exam11'>{item}</NavLink></p>)
     }
      <Footer></Footer>
      </div>
    )
  }
}
export default Eaxm