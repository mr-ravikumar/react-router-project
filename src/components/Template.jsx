import React from 'react'
import frameImage from '../assets/frame.png';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {FcGoogle} from 'react-icons/fc'

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1060px] mx-auto py-12 justify-between gap-x-12 mt-5'>
    
        {/* left side part */}
        <div className='w-11/12 max-w-[450px]'>

            <h1 className='text-richblack-5 font-semibold text-[1.8rem] leading-[2.375rem]'>{title}</h1>

            <p className='text-[1.125rem] leading-[1.625rem] mt-6'>
                <span className='text-richblack-100'>{desc1}</span>
                <br/>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {formtype === "signup" ?
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm  setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex w-full items-center my-4 gap-x-2 mt-4'>
                <div className='h-[1px] bg-richblack-700 w-full'></div>
                <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
                <div className='h-[1px] bg-richblack-700 w-full'></div>
            </div>

            <div>
                <button className='flex items-center w-full justify-center rounded-[8px] font-medium text-richblack-100 
                border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                    <FcGoogle className='text-2xl'/>
                    <p>Sign in with Google</p>
                </button>
            </div>

        </div>

        {/* right side part */}
        <div className='relative w-11/12 max-w-[450px] mt-6'>
            <img 
                src={frameImage} 
                width={558} 
                height={504} 
                loading='lazy' />
            <img 
                className='absolute -top-4 right-4'
                src={image} 
                width={554} 
                height={500} 
                loading='lazy' />
        </div>
    
    </div>
  )
}

export default Template;
