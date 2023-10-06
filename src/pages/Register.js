import React from 'react'
import "./Register.css"
import add from "../images/addimagetwo.png"

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
          <p>Let's chat now!</p> 
          <p>Register Now!</p>    
          <form>
            <input type="text" placeholder='Enter your name!'/>  
            <input type="email" placeholder='email!'/> 
            <input type="password" placeholder='password!'/>
            <input className='fileone' type="file" id='file' />
            <label htmlFor='file'>
               <img src={add} alt="logo"/> add your profile image
            </label>      
            <button>Sign Up</button>         
            </form> 
            <a>You do have an account? Login now!</a>    
       </div>   
    </div>
  )
}

export default Register