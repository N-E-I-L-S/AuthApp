import React, { useRef, useState } from 'react'
import './LoginPage.css'
import UserAuth from './Auth'
import { Link, Navigate } from 'react-router-dom'

export default function LoginPage() {
    const { user, login } = UserAuth()
    const uname = useRef();
    const pwd = useRef();
    const [logged, setLogged] = useState(false);
    const [logged1, setLogged1] = useState(false);
    const handleLogin = async (email, password) => {
        try {
            await login(email, password);
            <Navigate to='/dash' />
            console.log(email);
            setLogged(false);
            setLogged1(true);
        } catch (err) {
            console.log(err);
            setLogged(true);
            setLogged1(false);
        }
    };
    if(user==null)
    return (
        <>
            <div className="loginpage">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin(uname.current.value, pwd.current.value)
                }}
                >
                    <div className="login">
                        <p className='login-text'>Login Page</p>
                        {logged ?
                            <p className='pmatch'>Wrong Credentials</p>
                            :
                            null
                        }
                        {logged1 ?
                            <p className='pmatch-1'>Logged In!</p>
                            :
                            null
                        }
                        <div className="username">
                            <label htmlFor="">Username</label> <br />
                            <input type="email" id="uname" ref={uname} required={true} />
                        </div>
                        <div className="password">
                            <label htmlFor="">Password</label> <br />
                            <input type="password" id="pwd" ref={pwd} required={true} />
                        </div>
                        <div className="btns">
                            <button type='submit' className='btn'>Login</button>
                        </div>
                    </div>
                </form>
            </div>
            <div style={{marginLeft : "25vw"}}>

                        <Link to='/signup'>Don't have an account?  </Link> <br/>
                        <Link to = '/passreset'>forgot password?</Link>
            </div>

        </>
    )
    else 
    return <Navigate to ='/dash'/>
}
