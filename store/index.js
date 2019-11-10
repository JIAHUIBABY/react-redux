import {createStore,applyMiddleware,combineReducers} from 'redux'
import shopReducer from './shop/shop.reducer'
import examReducer from './exam/exam.reducer'
import thunk from 'redux-thunk'
let reducer=combineReducers({
    shopReducer,
    examReducer
})
let store =createStore(reducer,applyMiddleware(thunk));
export default store;