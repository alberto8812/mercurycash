
import  { useState } from 'react'
import { useDispatch} from "react-redux";
import { postUserdata } from '../Redux/actions';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
//this hook was create to control form,  this one done all validation before to send data to the server 





export const useSingUp = (Value,validation) => {
    const [initialValue, setInitialValue] = useState(Value);//inital input value
    const [errors, setErrors] = useState({});//hooks control error
    const dispatch=useDispatch();
    let navigate = useNavigate();


  const handleChangue=(e)=>{
    // fill information coming input
    setInitialValue({...initialValue,[e.target.name]:e.target.value})
 

  }


  const handleChangueCheck=(e)=>{

    // fill information coming checkbox
    setInitialValue({...initialValue,[e.target.name]:e.target.checked})


  }
  const handleError=(e)=>{
    //control error input
    handleChangue(e);
    setErrors(validation(initialValue));

  }

  const handleErrorcheck=(e)=>{  
     //control error checkbox
      handleChangueCheck(e);
     setErrors(validation(initialValue));
 
   }

  const handleSubmit=(e)=>{

    //submit information to de server
    e.preventDefault()
    setErrors(()=>validation(initialValue))
    if(Object.keys(errors).length){
      //if any information miss the information won't send
      return
    }else if(initialValue.email!==""){
      //información exitosa ir al backend
      Swal.fire({
        title:"User Data",
        text:"The information is ok",
        icon:"success",
        button:"ok"
      })
     dispatch(postUserdata(initialValue))
     setInitialValue({
        email:"",
        password:"",
        Retype_password:"",
        country:"",
        language:"english",
        checkBoxState:false,
    
      })
      navigate('/')
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