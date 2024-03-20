import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../Utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const user = useSelector((store) => store.user)
  const navigate = useNavigate()
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        navigate('/error')
      })
  }
  return (
    <>
      <div className=' absolute w-full flex px-8 py-2 bg-gradient-to-b from-black justify-between '>
        <img
          className='w-48 ml-20 '
          src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          alt='Netflixlogo'
        />
      </div>
    
      {user && (
        <>
          <p className='absolute right-36 top-6 my-4 mx-4 text-white underline'>
            {user.displayName}
          </p>
          <div className=' absolute right-10 my-5 mx-5'>
            <img
              className='w-16 h-16 rounded-3xl bg-gradient-to-t from-black '
              src='https://occ-0-4344-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTRjpXX9jCnvL6gUil_BBNnGcTiuAzWSSfAaWlvk2zkwrVEdIDX8mq6TPeY-2abLtZ-U7rUVIbCkP70XifqxrpDswmf9JwYEia-m.png?r=3e2'
              alt='usericon'
            />
            <button onClick={handleSignOut} className='font-semibold'>
              SignOut
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default Header
