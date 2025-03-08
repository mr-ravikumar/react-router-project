import React from 'react'
import Template from '../components/Template';
import loginImg from '../assets/login.png';

const Login = ({setIsLoggedIn}) => {
  return (
    <div className='h-auto bg-richblack-900'>
      <Template 
        title="Welcome Back"
        desc1="Build skills for today, tommorrow, and beyond."
        desc2="Education to future-proof your career."
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login;
