import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  )
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'ggybbo',
      email: 'ggybbo@react.com'
    },
    {
      id: 2,
      username: 'ggybbo1',
      email: 'ggybbo1@react.com'
    },
    {
      id: 3,
      username: 'ggybbo2',
      email: 'ggybbo2@react.com'
    }
  ];

  return (
    <div>
      {
        users.map(user => (<User user={user} key={user.id} />))
      }
    </div>
  )
}

export default UserList;