import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import shopAction from '../store/shop/shop.action'
 class Index extends Component {
  render() {
    return (
      <div>
      Index
      </div>
    )
  }
  componentDidMount(){
    this.props.data();
  }
}
export default connect(state => {
  // console.log(state)
  return {
   
  }
}, dispatch => {
  return bindActionCreators(shopAction, dispatch)
})(Index)