import React from 'react';

function CreateUser({ username, email, onChanged, onCreated }) {
  return (
    <div>
      <input name="username" placeholder="계정명" onChange={onChanged} value={username} />
      <input name="email" placeholder="이메일" onChange={onChanged} value={email} />
      <button onClick={onCreated}>등록</button>
    </div>
  )
}

export default CreateUser;