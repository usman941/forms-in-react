import React, { useState } from 'react'
import "./SignUpForm.css"
const LoginForm = () => {
    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
    return (
        <div className='cover'>
            <h1>Sign Up </h1>
            <input type="text" placeholder='Fullname'/> 
            <input type="email" placeholder='Email'/> 
            < input type="password"  placeholder='password'/>
            < input type="password"  placeholder='comform password'/>

            <div className='login-btn' onClick={popup}>Sign Up</div>
            {/* <p className='text'>Or login using </p>
            <div className='alt-login'>
                <div className='facebook'></div>
                <div className='google'></div>
    
            </div> */}
            <div className={popupStyle}>
              <h3>Registration Failed</h3>
              <p>username or password is incorrect</p>
            </div>
        </div>
      )
    }
    export default LoginForm
    