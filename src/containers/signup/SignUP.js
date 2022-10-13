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
  checkBox:""

}



const SignUP = () => {
  const countries=useSelector((state)=>state.countries)
  const dispatch = useDispatch();
  const [formSingUp, setFormSingUp] = useState(initailState)



useEffect(() => {
 dispatch(getContries())
}, [])








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
              />
              <div><FaUserCircle/></div>
            </div>
             
             <div>
              <input
                type="Password"
                placeholder='Password'
                name='Password'
              />
              <div>< BsEye/></div>
              </div>
              
              <div>
              <input
                type="Password"
                placeholder='Retype Password'
                name='RetypePassword'
              />
              <div>< BsEye/></div>
              </div>

              <div className='signup__form-selectcontry'>
              <select  onClick={''} >
                    <option  value={''} >{'Country of Residence'}</option>
                    {countries.length && countries.map(data=>{
                      return <option  value={data.country}  key={data.id} >{data.country}</option>
                    })}  
              </select>
              <div><BsSearch className='signup_BsSearch'/></div>
              </div>

              <div>
              <select  onClick={''} >
                    <option  value={''} >{'English'}</option>      
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