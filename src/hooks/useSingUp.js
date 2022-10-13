import React from 'react'
import  { useState } from 'react'
import { useDispatch} from "react-redux";


export const useSingUp = (Value,validation) => {
    const [initialValue, setInitialValue] = useState(Value);
    const [errors, setErrors] = useState({});
    const dispatch=useDispatch();
//console.log(initialValue)

  const handleChangue=(e)=>{
//console.log(e.target.value)
   // handleError(e)
    setInitialValue({...initialValue,[e.target.name]:e.target.value})
 

  }


  const handleChangueCheck=(e)=>{

    handleError(e)
    setInitialValue({...initialValue,[e.target.name]:e.target.checked})


  }
  const handleError=(e)=>{
  
     
   handleChangue(e);
    //handleChangueCheck(e);
    setErrors(validation(initialValue));

  }

  const handleSubmit=(e)=>{}



return{
    initialValue,
    errors,
    handleChangue,
    handleChangueCheck,
    handleError,
    handleSubmit

}
}