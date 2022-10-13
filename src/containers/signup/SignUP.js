import React, { useEffect, useState } from 'react'
import {images} from '../../constants/idex';
import{NavLink} from 'react-router-dom'
import { BsEye,BsSearch } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import './SignUp.scss'
import {getContries} from '../../Redux/actions'
import {useSingUp} from  '../../hooks/useSingUp'

const initailState={
  email:"",
  password:"",
  Retype_password:"",
  country:"",
  language:"english",
  checkBoxState:"",
 
}
const validation=(initialValue)=>{
 // console.log(initialValue)
  let error={}
  let longEmail= /\S+@\S+\.\S+/;
 console.log(initialValue)
 if(initialValue.email===""){
   error.email="The email field is required"
 }//else if(!longName.test(initialValue.email)){
 //  error.email="The name is too long, it doesn't exceed 20 characters"
// }
 if(initialValue.password!==initialValue.Retype_password){
  error.password="password are not the same"
 }
 //if(!initialValue. password){
  // error.password="The Description field is required"
 //}
 if(initialValue.country===''){
  error.country="The contry field is required"
 }

 
 console.log(error)
  return error
 }




const SignUP = () => {
  const {initialValue,errors, handleChangue,handleChangueCheck,handleError,handleSubmit}=useSingUp(initailState,validation)
  const countries=useSelector((state)=>state.countries)
  const dispatch = useDispatch();
  const [formSingUp, setFormSingUp] = useState(initailState)
  const [viewsPassword, setViewsPassword] = useState({password1:'password',password2:'password'})






    useEffect(() => {
        dispatch(getContries())
        }, [])


  //const handleChangue=(e)=>{


    //  setFormSingUp({...formSingUp,[e.target.name]:e.target.value})
 

  //}


 // const handleChangueCheck=(e)=>{


    //setFormSingUp({...formSingUp,[e.target.name]:e.target.checked})


  //}

  const viewPassword=(dato)=>{

   if(dato==='password1'){
    setViewsPassword(viewsPassword.password1==='password'?{...viewsPassword,password1:"text"}:{...viewsPassword,password1:'password'})
   }else{
    setViewsPassword(viewsPassword.password2==='password'?{...viewsPassword,password2:"text"}:{...viewsPassword,password2:'password'})
   }
  }




  return (
    <>
      <div className='signup__container'>
         <div className='signup__container-header'>
             <div><img src={images.logo}/></div>
              <p><span>mercury</span>cash</p>
         </div>

         <div className='signup__container-body'>
            <h2>Welcome Back</h2>

            <form onSubmit={(e)=>handleSubmit(e)} >
              
            <div>
              <input
              onBlur={handleError}
              type="email"
              placeholder='Email'
              name='email'
              value={initialValue.email} 
              onChange={(e)=>handleChangue(e)}
              />
              <div><FaUserCircle/></div>
              {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
            </div>
            
             <div>
              <input
               
                type={viewsPassword.password1}
                placeholder='Password'
                name='password'
                value={initialValue.password} 
                onChange={(e)=>handleChangue(e)}
              />
              <div onClick={()=> viewPassword('password1')}>< BsEye/></div>
              </div>
              
              <div>
              <input
                onBlur={handleError}
                type={viewsPassword.password2}
                placeholder='Retype Password'
                name='Retype_password'
                value={initialValue.Retype_password} 
                onChange={(e)=>handleChangue(e)}
              />
              <div onClick={()=> viewPassword('password2')}>< BsEye/></div>
              {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
              </div>

              <div className='signup__form-selectcontry'>
               <select  
                onBlur={handleError}
                name='country'
                value={initialValue.country} 
                onChange={(e)=>handleChangue(e)}
                
               >
                    <option  value={''} >{'Country of Residence'}</option>
                    {countries.length && countries.map(data=>{
                      return <option  value={data.country}  key={data.id} >{data.country}</option>
                    })}  
              </select>
              <div><BsSearch className='signup_BsSearch'/></div>
              {errors.country && <p style={{color:'red'}}>{errors.country}</p>}
              </div>

              <div>
              <select 
             
                name='language'
                value={initialValue.language} 
                onChange={(e)=>handleChangue(e)}
                
              >
                    <option  value={'english'} >{'English'}</option> 
                    <option  value={'español'} >{'Español'}</option>       
              </select>
              </div>

              <div className='signup__form-cehckbox'>
               
                <input 
                  type='checkbox'
                  name="checkBoxState"
                  value='checkBoxState'
                  onChange={(e)=>handleChangueCheck(e)}
                  />
                
                <p>By continuing I agree to the <a href='political'> Terms of Services </a> and <a href='Privacy'> Privacy Policy</a></p>
              </div>

              <button type='submit'>Sing up</button>
            </form>
         </div>

      </div>
      <div className='signup__container-footer'>
        <span>Don't Have an account? </span><NavLink to='/'>Log in</NavLink><span> instead</span>
      </div>
      
    
    </>
      
  )
}

export default SignUP