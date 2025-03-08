import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export const LoginForm = ({setIsLoggedIn}) => {
    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    const navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");

        //finally printing loginform data
        const finalData = {
            ...formData
        }
        console.log(finalData);
    }


  return (
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-5'>
        {/* email address field */}
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email address <sup className='text-pink-200'>*</sup>
            </p>
            <input 
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b'
                required
                name='email'
                type="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="Enter email address"
            />
        </label>

        {/* password field */}
        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password <sup className='text-pink-200'>*</sup>
            </p>
            <input 
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b'
                required
                name='password'
                type= {showPassword ? ("text") :  ("password")}
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter password"
            />

            <span 
            className='absolute right-3 top-[38px] cursor-pointer'
            onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 text-right'>
                    Forgot Password
                </p>
            </Link>
        </label>

        {/* sign in button */}
        <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm;
