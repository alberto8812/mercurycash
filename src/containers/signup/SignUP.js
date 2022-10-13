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
  checkBox:""

}



const SignUP = () => {
  const countries=useSelector((state)=>state.countries)
  const dispatch = useDispatch();
  const [formSingUp, setFormSingUp] = useState(initailState)
 console.log(formSingUp)


    useEffect(() => {
        dispatch(getContries())
        }, [])


  const handleChangue=(e)=>{
    console.log(e.target)
    setFormSingUp({...formSingUp,[e.target.name]:e.target.value})
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
                type="Password"
                placeholder='Password'
                name='password'
                value={formSingUp.password} 
                onChange={(e)=>handleChangue(e)}
              />
              <div>< BsEye/></div>
              </div>
              
              <div>
              <input
                type="Password"
                placeholder='Retype Password'
                name='Retype_Password'
                value={formSingUp. Retype_password} 
                onChange={(e)=>handleChangue(e)}
              />
              <div>< BsEye/></div>
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
                <input type='checkbox'/>
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