import './Forms.css'
import React, { useState } from 'react'

export default function Login() {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <main>
        <form className='form' onSubmit={handleSubmit}>
          <span>Log into your account!</span>
          <label>
            <input 
              type='text'
              required
              onChange={(e) => setUsername(e.target.value)}
              value={username}/>
              <span>Username</span>
          </label>
          <label>
            <input 
              type='password'
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}/>
              <span>Password</span>
          </label>
          <button>Sign in!</button>
        </form>
    </main>
  )
}
