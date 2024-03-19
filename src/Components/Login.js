import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div>
        <img
          className='-z-10 absolute'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='Netflix_Logo_PMS'
        />
        <form className='flex-col w-[32%] absolute items-center px-[4.5rem] pb-40 mt-[5.7rem] mb-0 mx-auto left-0 right-0 text-white bg-black rounded-sm bg-opacity-80 '>
          <h1 className='font-bold text-4xl py-6 mt-7 '>
            {isSignInForm ? 'Sign In' : 'Sign Up '}
          </h1>
          {!isSignInForm && (
            <input
              type='text'
              placeholder='Full Name'
              className='p-3.5 my-2 w-full rounded-md  bg-black/50 border border-[#606060]'
            />
          )}
          <input
            type='text'
            placeholder='Email or phone number'
            className='p-3.5 my-2 w-full rounded-md  bg-black/50 border border-[#606060]'
          />
          {/*  */}
          {!isSignInForm ? (
            <div>
              <input
                type='text'
                placeholder='New Password'
                className='p-3.5 my-2.5  w-full  rounded-md bg-black/50 border border-[#606060]'
              />
              <input
                type='text'
                placeholder='Confirm Password'
                className='p-3.5 my-2.5  w-full  rounded-md bg-black/50 border border-[#606060]'
              />

            </div>
          ) : (
            <input
              type='text'
              placeholder='Password'
              className='p-3.5 my-2.5  w-full  rounded-md bg-black/50 border border-[#606060]'
            />
          )}
          <button className='px-4 py-2 my-2.5 font-semibold bg-red-700 w-full rounded-sm '>
            {isSignInForm ? ' Sign In' : 'Sign Up '}
          </button>

          <p className='py-4 hover:cursor-pointer'>
            {isSignInForm ? 'New to Netflix? ' : 'Already a User? '}
            <span
              className='hover:underline cursor-pointer'
              onClick={toggleSignInForm}
            >
              {isSignInForm ? 'Sign Up' : 'Sign In'}
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
