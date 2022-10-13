import axios from "axios";

import {  GET_COUNTRIES,POST_USERDATA } from "../AllconstRedux";



export const getContries=()=>{
    return async function(dispatch){
        let {data}=await axios.get('http://localhost:5000/countries')
        return dispatch({
            type:GET_COUNTRIES,
            payload:data
        })
    }
}

export const postUserdata=(dataUser)=>{
    return async function(dispatch){
        let {data}=await axios.post('http://localhost:5000/user',dataUser)
        return dispatch({
            type:POST_USERDATA,
            payload:data
        })
    }
}