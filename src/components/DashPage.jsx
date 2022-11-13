import React from 'react'
import './HomePage.css'
import UserAuth from './Auth'

export default function DashPage() {
  const {user} = UserAuth();
  return (
    <>
    <div className="homepage">
        <div className="home">
            <h3 className='home-text'>
            User Details 
            </h3>
            <div className="userdetails">
                <p>Username: {user.email}</p> 
            </div>
        </div>
    </div>
    </>
  )
}
