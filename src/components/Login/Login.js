import React, { useState } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import { DashboardData } from '../Login/DashborardData'

const LoginCredentials =
{
    "username": "hruday@gmail.com",
    "password": 'hruday123'
}

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispath = useDispatch()

    const handleLogin = async (e) => {
        e.preventDefault()

        if (email === LoginCredentials.username &&
            password === LoginCredentials.password) {
            dispath(
                login({
                    loggedIn: true,
                    employeeList: DashboardData,
                }),
            )
        }
    }
    return (
        <>
            <div className="login">
                <form className="login-form" onSubmit={handleLogin}>
                    <h1 className="h1">
                        Login
              </h1>
                    <div className="form-content">
                        <input
                            type="email"
                            placeholder="Username"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                        <button
                            type="submit"
                            className="submit"
                            disabled={!email || !password}
                        >
                            Submit
                        </button>
                    </div>
                </form>


            <div className="hint">
                <b>-:-Hint-:-</b>
                <span><b>Username:</b> {LoginCredentials.username}</span>
                <span><b>Password:</b> {LoginCredentials.password}</span>
            </div>
            </div>
        </>
    )
}

export default Login