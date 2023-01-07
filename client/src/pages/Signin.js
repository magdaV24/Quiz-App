import './Forms.css'
import React, { useState } from 'react'

export default function Signin() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
        <main>
        <form className='form' onSubmit={handleSubmit}>
          <span>Create a new account!</span>
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
          <label>
            <input 
              type='password'
              required
              onChange={(e) => setConfirm(e.target.value)}
              value={confirm}/>
              <span>Confirm password</span>
          </label>
          <button>Sign in!</button>
        </form>
    </main>
    </div>
  )
}
