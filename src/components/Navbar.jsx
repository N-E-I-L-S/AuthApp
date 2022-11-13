import React from 'react'
import { Link } from 'react-router-dom'
import UserAuth from './Auth'

export default function Navbar() {
    const { user, logout } = UserAuth();
    let useremail= null;
    try{
        useremail = user.email;
    }catch{
        useremail= JSON.stringify(null);
    }
    
    return (
        <>
            <Link to='/'> Home </Link>
            <Link to='/login'> Login </Link>
            <Link to='/dash'> DashBoard</Link>
            <button onClick={() => {
                logout()
            }}>LogOut</button>
            <p style={{ color: "white" }}>User : {useremail}</p>
        </>
    )
}
