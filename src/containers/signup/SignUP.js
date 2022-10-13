import React, { useEffect, useState } from 'react'
import {images} from '../../constants/idex';
import{NavLink} from 'react-router-dom'
import { BsEye,BsSearch } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import './SignUp.scss'
import {getContries} from '../../Redux/actions'


const initailState={
  email:"",
  password:"",
  Retype_password:"",
  country:"",
  language:"",
 
}
const initailStatecheck={
  checkBoxState:"",
}



const SignUP = () => {
  const countries=useSelector((state)=>state.countries)
  const dispatch = useDispatch();
  const [formSingUp, setFormSingUp] = useState(initailState)
  const [formCheck, setFormCheck] = useState(initailStatecheck)
  const [viewsPassword, setViewsPassword] = useState({password1:'password',password2:'password'})



 //console.log(formSingUp)


    useEffect(() => {
        dispatch(getContries())
        }, [])


  const handleChangue=(e)=>{


      setFormSingUp({...formSingUp,[e.target.name]:e.target.value})
 

  }


  const handleChangueCheck=(e)=>{


    setFormCheck({...formCheck,[e.target.name]:e.target.checked})


  }

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
            <form >
            <div>
              <input
              type="email"
              placeholder='Email'
              name='email'
              value={formSingUp.email} 
              onChange={(e)=>handleChangue(e)}
              />
              <div><FaUserCircle/></div>
            </div>
             
             <div>
              <input
                type={viewsPassword.password1}
                placeholder='Password'
                name='password'
                value={formSingUp.password} 
                onChange={(e)=>handleChangue(e)}
              />
              <div onClick={()=> viewPassword('password1')}>< BsEye/></div>
              </div>
              
              <div>
              <input
                type={viewsPassword.password2}
                placeholder='Retype Password'
                name='Retype_password'
                value={formSingUp.Retype_password} 
                onChange={(e)=>handleChangue(e)}
              />
              <div onClick={()=> viewPassword('password2')}>< BsEye/></div>
              </div>

              <div className='signup__form-selectcontry'>
               <select  
                name='country'
                value={formSingUp.country} 
                onChange={(e)=>handleChangue(e)}
                
               >
                    <option  value={''} >{'Country of Residence'}</option>
                    {countries.length && countries.map(data=>{
                      return <option  value={data.country}  key={data.id} >{data.country}</option>
                    })}  
              </select>
              <div><BsSearch className='signup_BsSearch'/></div>
              </div>

              <div>
              <select 
                name='language'
                value={formSingUp.language} 
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