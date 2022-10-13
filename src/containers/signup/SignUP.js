import React, { useEffect, useState } from 'react'
import {images} from '../../constants/idex';
import{NavLink} from 'react-router-dom'
import { BsEye,BsSearch } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";//librari redux
import './SignUp.scss'
import {getContries} from '../../Redux/actions'//action reduc
import {useSingUp} from  '../../hooks/useSingUp'//hook create  control form
import Loaders from '../../components/Loadres/Loaders';// component loaders

const initailState={
  email:"",
  password:"",
  Retype_password:"",
  country:"",
  language:"english",
  checkBoxState:false,
 
}
const validation=(initialValue)=>{
 //validation inialstate
  let error={}
  let longEmail= /\S+@\S+\.\S+/;
 console.log(initialValue)
 if(initialValue.email===""){
   error.email="The email field is required"
 }else if(!longEmail.test(initialValue.email)){
   error.email="The Email is rong, it haven't @ characters"
 }
 if(initialValue.password!==initialValue.Retype_password){
  error.password="password are not the same"
 }else if(!initialValue.password.length){
   error.password="The password field is required"
 }
 if(initialValue.country===''){
  error.country="The contry field is required"
 }
 if(initialValue.checkBoxState===false){
  error.checkBoxState="you shoul be I agree to the Term of services"
 }

 

  return error
 }




const SignUP = () => {
  const {initialValue,errors, handleChangue,handleChangueCheck,handleError,handleSubmit,handleErrorcheck}=useSingUp(initailState,validation)//hook implement control form
  const countries=useSelector((state)=>state.countries)//store redux
  const dispatch = useDispatch();
  const [viewsPassword, setViewsPassword] = useState({password1:'password',password2:'password'})//view of parssword state
  const [loader, setLoader] = useState(false)//hooks loader
  


    useEffect(() => {
        dispatch(getContries())//get contry form de local host
        setTimeout(() => {
          setLoader(()=>true)//implement loader 5s
        }, 5000);
        
        }, [dispatch])




  const viewPassword=(dato)=>{
  //funtion views password
   if(dato==='password1'){
    setViewsPassword(viewsPassword.password1==='password'?{...viewsPassword,password1:"text"}:{...viewsPassword,password1:'password'})
   }else{
    setViewsPassword(viewsPassword.password2==='password'?{...viewsPassword,password2:"text"}:{...viewsPassword,password2:'password'})
   }
  }




  return (
  <>
    
     {!loader?<div className='signup__louder'><Loaders/></div>:<div className='signup__container'>
       
         <div className='signup__container-header'>
             <div><img src={images.logo} alt='mercury'/></div>
              <p><span>mercury</span>cash</p>
         </div>

         <div className='signup__container-body'>
            <h2>Create your account</h2>
            {/*form to create count */}
            <form onSubmit={(e)=>handleSubmit(e)} >
              
            <div>
              {/*input email */}
              <input
              onBlur={handleError}//event to control error
              type="email"
              placeholder='Email'
              name='email'
              value={initialValue.email} 
              onChange={(e)=>handleChangue(e)}
              />
              <div><FaUserCircle/></div>
              {errors.email && <p style={{color:'red',fontSize:'1.5vh'}}>{errors.email}</p>}{/*message error */}
            </div>
            
             <div>
              {/*input password */}
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
                 {/*input Retype Password */}
              <input
                onBlur={handleError}//event error to retype password
                type={viewsPassword.password2}
                placeholder='Retype Password'
                name='Retype_password'
                value={initialValue.Retype_password} 
                onChange={(e)=>handleChangue(e)}
              />
              <div onClick={()=> viewPassword('password2')}>< BsEye/></div>
              {errors.password && <p style={{color:'red',fontSize:'1.5vh'}}>{errors.password}</p>}{/*message error */}
              </div>

              <div className='signup__form-selectcontry'>
                 {/*input select contry*/}
               <select  
                onBlur={handleError}//event error to select contry
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
              {errors.country && <p style={{color:'red',fontSize:'1.5vh'}}>{errors.country}</p>}{/*message error */}
              </div>

              <div>
                {/*input langueage */}
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
                {/*input condition term */}
                <input 
                onBlur={handleErrorcheck}
                  type='checkbox'
                  name="checkBoxState"
                  value='checkBoxState'
                  onChange={(e)=>handleChangueCheck(e)}
                  />
                
                <p>By continuing I agree to the <a href='political'> Terms of Services </a> and <a href='Privacy'> Privacy Policy</a></p>
                
              </div>
              {errors.checkBoxState && <p style={{color:'red',fontSize:'1.5vh'}}>{errors.checkBoxState}</p>}{/*message error */}
              <button type='submit' >Sing up</button>
            </form>
         </div>

      </div>}
        {/*link to redirec Log in */}
      <div className='signup__container-footer'>
        <span>Don't Have an account? </span><NavLink to='/'>Log in</NavLink><span> instead</span>
      </div>
      
    
    </>
      
  )
}

export default SignUP