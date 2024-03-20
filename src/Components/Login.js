import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../Utils/validate'
import { auth } from '../Utils/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../Utils/userSlice'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)

  const [errMessage, setErrMessage] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value)
    setErrMessage(message)

    if (message) return

    if (!isSignInForm) {
      //Signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user
          console.log(user)
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              )
              navigate('/browse')
            })
            .catch((error) => {
              // An error occurred
              // ...
            })
          // ...
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          // ..
          setErrMessage(errorCode + '-' + errorMessage)
        })
    } else {
      //signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          // ...
          console.log(user)
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code
          if (errorCode) {
            setErrMessage('User Not Found')
          }
        })
    }
  }

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
        <form
          onSubmit={(e) => e.preventDefault()}
          className='flex-col w-[32%] absolute items-center px-[4.5rem] pb-40 mt-[5.7rem] mb-0 mx-auto left-0 right-0 text-white bg-black rounded-sm bg-opacity-80 '
        >
          <h1 className='font-bold text-4xl py-6 mt-7 '>
            {isSignInForm ? 'Sign In' : 'Sign Up '}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type='text'
              placeholder='Full Name'
              className='p-3.5 my-2 w-full rounded-md  bg-black/50 border border-[#606060]'
            />
          )}
          <input
            ref={email}
            type='email'
            placeholder='Email Address '
            className='p-3.5 my-2 w-full rounded-md  bg-black/50 border border-[#606060]'
          />

          {!isSignInForm ? (
            <div>
              <input
                ref={password}
                type='password'
                placeholder='New Password'
                className='p-3.5 my-2.5  w-full  rounded-md bg-black/50 border border-[#606060]'
              />
            </div>
          ) : (
            <input
              ref={password}
              type='password'
              placeholder='Password'
              className='p-3.5 my-2.5  w-full  rounded-md bg-black/50 border border-[#606060]'
            />
          )}
          <p className='text-red-500  '>{errMessage}</p>
          <button
            className='px-4 py-2 my-2.5 font-semibold bg-red-700 w-full rounded-sm '
            onClick={handleButtonClick}
          >
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
