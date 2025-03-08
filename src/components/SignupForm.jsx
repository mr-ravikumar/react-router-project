import React, { useEffect } from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {
    
    const [formData, setFormData] = useState({
        firstName: "", 
        lastName: "", 
        email: "", 
        password: "",
        confirmPassword: ""
    })

    const [showPasswordFirst, setShowPasswordFirst] = useState(false);
    const [showPasswordSecond, setShowPasswordSecond] = useState(false);

    function changeHandler(event) {
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    const navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password != formData.confirmPassword)
        {
            toast.error("Password do not match!");
            navigate("/");
        }
        else{
            setIsLoggedIn(true);
            toast.success("Account Created")
            navigate("/dashboard");

            //finally printing signup form data
            const finalData = {
                ...formData,
                accountType
            }
            console.log(finalData);
        }
    }

    const [accountType, setAccountType] = useState("student");

  return (
    <div>
        {/* student - instructor tab */}
        <div className='flex p-3 gap-x-2 my-6 rounded-full max-w-max bg-richblack-800'>

            <button
                onClick={() => setAccountType("student")}
                className={`${accountType === "student" 
                ? "bg-richblack-900 text-richblack-5" 
                : "bg-transparent text-richblack-200"
                } py-2 px-5 rounded-full transition-all duration-200`}
            >
                Student
            </button>

            <button 
                onClick={() => setAccountType("instructor")}
                className={`${accountType === "instructor" 
                ? "bg-richblack-900 text-richblack-5" 
                : "bg-transparent text-richblack-200"
                } py-2 px-5 rounded-full transition-all duration-200`}
            >
                Instructor
            </button>

        </div>

        {/* signup form here */}
        <form onSubmit={submitHandler}>

            {/* first name and last name container */}
            <div className='flex gap-x-5 mt-4'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                    <input 
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b'
                        required
                        type='text'
                        name='firstName'
                        onChange={changeHandler}
                        placeholder="Enter first name"
                        value={formData.firstName}
                    />
                </label>


                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                    <input 
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b'
                        required
                        type='text'
                        name='lastName'
                        onChange={changeHandler}
                        placeholder="Enter last name"
                        value={formData.lastName}
                    />
                </label>
            </div>

            {/* email address  */}
            <label>
                <p className='mt-4 text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email address<sup className='text-pink-200'>*</sup></p>
                <input 
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b'
                    required
                    type='email'
                    name='email'
                    onChange={changeHandler}
                    placeholder="Enter email address"
                    value={formData.email}
                />
            </label>

            {/* create password and confirm password */}
            <div className='flex gap-x-5 mt-4'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create password<sup className='text-pink-200'>*</sup></p>
                    <input 
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b'
                        required
                        type={showPasswordFirst ? "text" : "password"}
                        name='password'
                        onChange={changeHandler}
                        placeholder="Enter password"
                        value={formData.password}
                    />

                    <span
                    className='absolute right-3 top-[39px] cursor-pointer'
                    onClick={() => setShowPasswordFirst((prev) => !prev)}>
                        {showPasswordFirst ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                    </span>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm password<sup className='text-pink-200'>*</sup></p>
                    <input 
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b'
                        required
                        type={showPasswordSecond ? "text" : "password"}
                        name='confirmPassword'
                        onChange={changeHandler}
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                    />

                    <span 
                    className='absolute right-3 top-[39px] cursor-pointer'
                    onClick={() => setShowPasswordSecond((prev) => !prev)}>
                        {showPasswordSecond ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
            </div>

            {/* create account button */}
            <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-10'>
                Create Account
            </button>

        </form>
    </div>
  )
}

export default SignupForm;