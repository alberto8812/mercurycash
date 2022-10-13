import axios from "axios";

import {  GET_COUNTRIES } from "../AllconstRedux";



export const getContries=()=>{
    return async function(dispatch){
        let {data}=await axios.get('http://localhost:5000/countries')
        return dispatch({
            type:GET_COUNTRIES,
            payload:data
        })
    }
}