import {GETDATA} from './exam.type'
import axios from 'axios'
const data=()=>{
    return dispatch=>{
        axios.get('/getdata').then(res=>{
            console.log(res.data)
        })
    }
}
export default {
    data
}