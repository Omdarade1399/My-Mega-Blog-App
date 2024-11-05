import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../Appwrite/auth'
import { logout } from '../../Store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            navigate("/Login")
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 text-white duration-200 text-lg hover:bg-blue-100 hover:text-black rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn