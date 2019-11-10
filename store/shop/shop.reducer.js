import { SHOPDATA, SUM_DATA, CHECK, CHECKALL } from './shop.type'
let data = {
    data: [],
    sum: 0,
    checkAll: false,
    dataArr: []
}
const shopReducer = (state = data, action) => {
    function price() {
        state.sum = state.data.reduce((pre, cur) => {
            pre += cur.haspromotionTag ? cur.showst * cur.wishst : 0
            return pre;
        }, 0)
    }
    // console.log(action.type)
    switch (action.type) {
        case SHOPDATA: {
            state.data = action.data;
        }
            return { ...state, data: [...state.data] }
        case SUM_DATA: {
            let { index, wishst } = action;
            state.data[index].wishst = wishst;
            price()
        }
            return { ...state, data: [...state.data] }
        case CHECK: {
            let { index, haspromotionTag } = action;
            if (haspromotionTag) {
                state.data[index].haspromotionTag = haspromotionTag
                price()
            }
            else {
                state.data[index].haspromotionTag = false;
                price();
            }
            state.checkAll = state.data.every(item => item.haspromotionTag);
        }
            return { ...state, data: [...state.data] }
        case CHECKALL:
            state.checkAll = action.all;
            state.data.map(item => {
                item.haspromotionTag = action.all
                return { ...item }
            })
            price();
            return { ...state, data: [...state.data] }
        default: return { ...state }
    }
}
export default shopReducer