import React from 'react'
import Template from '../components/Template';
import signupImg from '../assets/signup.png';

const Signup = ({setIsLoggedIn}) => {
  return (
    <div  className='h-auto bg-richblack-900'>
      <Template 
        title="Join the millions learning to code with StudyNotion for free."
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup;
