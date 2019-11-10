import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import shopAction from '../store/shop/shop.action'
 class Detail extends Component {
  render() {
  let id=this.props.match.params.id.slice(4);
  let{shopData}=this.props
  let arr=shopData.filter((item)=>item.id==id);

  console.log(arr)
    return (
      <div className='wrap'>
      {
        arr && arr.map((item, index) => {
          let { nm, id, img, haspromotionTag, wishst ,showst} = item
          return <div className='con' key={index}>
            <div className='left'>
              <input type='checkbox' />
              <img src={img.replace('w.h', '128.180')} alt='' />
            </div>
            <div className='mid'>
              <h3 >{nm}</h3>
              <p>{showst}</p>
            </div>
            <div className='right'>
              <button >-</button>
              <h3>{wishst}</h3>
              <button>+</button>
            </div>
          </div>
        })
      }
      </div>
    )
  }
}
export default  connect(state => {
  // console.log(state.shopReducer.checkAll)
  return {
    shopData: state.shopReducer.data,
    price:state.shopReducer.sum,
    all:state.shopReducer.checkAll
  }
}, dispatch => {
  return bindActionCreators(shopAction, dispatch)
})(Detail)