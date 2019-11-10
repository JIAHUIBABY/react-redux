import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import shopAction from '../store/shop/shop.action'
import {NavLink} from 'react-router-dom'
import Footer  from '../commponent/footer'
class Shop extends Component {
  render() {
    let { shopData ,price,all,history} = this.props;
    return (
      <div className='wrap'>
        <div><input type='checkbox' checked={all} onChange={()=>{this.checkAll(all)}}/>  全选</div>
        {
          shopData && shopData.map((item, index) => {
            let { nm, id, img, haspromotionTag, wishst ,showst} = item
            return <div className='con' key={index}>
              <div className='left'>
                <input type='checkbox' value={haspromotionTag} onChange={() => { this.change(index,haspromotionTag) }} />
                <img src={img.replace('w.h', '128.180')} alt='' />
              </div>
              <div className='mid'>
                <h3 ><NavLink to={`/detail/:id=${id}`}>{nm}</NavLink></h3>
                <p>{showst}</p>
              </div>
              <div className='right'>
                <button onClick={() => { this.changeValue(false, wishst, index) }}>-</button>
                <h3>{wishst}</h3>
                <button onClick={() => { this.changeValue(true, wishst, index) }}>+</button>
              </div>
            </div>
          })
        }
        <footer>
          <span>总数</span>
          <span>总价{price}</span>
        </footer>
        <Footer></Footer>
      </div>
    )
  }
  checkAll=(all)=>{//全选
    this.props.checkALL(!all)
  }
  change=(index,haspromotionTag)=>{//单选
    this.props.checks(index,!haspromotionTag)
  }
  changeValue = (flag, wishst, index) => {//加加减减
    wishst = flag ? wishst + 1 : wishst - 1;
    if (wishst <= 0) return;
    this.props.sum(wishst, index);
  }
  componentDidMount() {
    this.props.data();
  }
}
export default connect(state => {
  // console.log(state.shopReducer.checkAll)
  return {
    shopData: state.shopReducer.data,
    price:state.shopReducer.sum,
    all:state.shopReducer.checkAll
  }
}, dispatch => {
  return bindActionCreators(shopAction, dispatch)
})(Shop)