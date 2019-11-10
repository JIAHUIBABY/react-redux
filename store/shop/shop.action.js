import {SHOPDATA,SUM_DATA,CHECK,CHECKALL} from './shop.type'
import axios from 'axios'
const data=()=>{
    return dispatch=>{
        axios.get('/getmoives').then(res=>{
            let data=res.data.data.movieList;
            dispatch({type:SHOPDATA,data})
        }
        )
    }
}
const sum=(wishst,index)=>{
    return{type:SUM_DATA,wishst,index}

}
const checks=(index,haspromotionTag)=>{
    return{type:CHECK,index,haspromotionTag}
}
const checkALL=(all)=>{
    return{type:CHECKALL,all}
}
export default {
    data,
    sum,
    checks,
    checkALL
}