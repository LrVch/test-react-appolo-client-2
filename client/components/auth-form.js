import React, { useState } from 'react';

export const AuthForm = ({ onSubmit, disabled, errors }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  return (
    <div  className="row">
      <div className="errors">
        {errors.map((error, index) => (
          <div key={index}>{error}</div>
          ))}
      </div>
      <form noValidate onSubmit={e => {
        e.preventDefault();
        onSubmit({
          email,
          password,
        });
      }} className="col s4">
        <div className="input-field">
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-field">
          <label>Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button disabled={disabled} type="submit" className="btn">Submit</button>
      </form>
    </div>
  )
}