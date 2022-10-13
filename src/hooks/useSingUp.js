import React from 'react'
import  { useState } from 'react'
import { useDispatch} from "react-redux";
import { postUserdata } from '../Redux/actions';


export const useSingUp = (Value,validation) => {
    const [initialValue, setInitialValue] = useState(Value);
    const [errors, setErrors] = useState({});
    const dispatch=useDispatch();

console.log(initialValue)
  const handleChangue=(e)=>{

    setInitialValue({...initialValue,[e.target.name]:e.target.value})
 

  }


  const handleChangueCheck=(e)=>{


    setInitialValue({...initialValue,[e.target.name]:e.target.checked})


  }
  const handleError=(e)=>{
    handleChangue(e);
    setErrors(validation(initialValue));

  }

  const handleErrorcheck=(e)=>{  
      handleChangueCheck(e);
     setErrors(validation(initialValue));
 
   }

  const handleSubmit=(e)=>{
    e.preventDefault()
    setErrors(validation(initialValue))
    if(Object.keys(errors).length){
      console.log(errors)
      console.log("complete allcheck")
      return
    }else{
     dispatch(postUserdata(initialValue))
     setInitialValue({
        email:"",
        password:"",
        Retype_password:"",
        country:"",
        language:"english",
        checkBoxState:false,
      })
    return;
    }

  }



return{
    initialValue,
    errors,
    handleChangue,
    handleChangueCheck,
    handleError,
    handleSubmit,
    handleErrorcheck

}
}