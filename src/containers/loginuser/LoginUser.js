import React from 'react'
import {images} from '../../constants/idex';
import{NavLink} from 'react-router-dom'
import { BsEye } from 'react-icons/bs'
import './LoginUser.scss'


const LoginUser = () => {
  return (
    <>
      <div className='login__container'>
         <div className='login__container-header'>
             <div><img src={images.logo}/></div>
              <p><span>mercury</span>cash</p>
         </div>

         <div className='login__container-body'>
            <h2>Welcome Back</h2>
            <form >
              <input
              type="email"
              placeholder='Email'
              name='email'
        
              />
             
             <div>
              <input
                type="Password"
                placeholder='Password'
                name='Password'
              />
              <div>< BsEye/></div>
              </div>
              
              <a href='mercory.com'>Forgot Password</a>

              <div className='login__form-cehckbox'>
             
                <input type='checkbox'/>
            
                <span>Remember me.</span>
              </div>

              <button type='submit'>Log In</button>
            </form>
         </div>

      </div>
      <div className='login__container-footer'>
        <span>Don't Have an account? </span><NavLink to='/signUp'>Sign up</NavLink><span> instead</span>
      </div>
      
    
    </>
      

  )
}

export default LoginUser