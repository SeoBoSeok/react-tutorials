import React, { useRef, useState } from 'react';
import UserList from './UserList';
import './App.css';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChanged = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
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
  ]);

  // Rendering 할 값은 아닌 컴포넌트내에 변수를 할당하고 이것이 계속 기억되어야 될때 useRef로 쓸 수있다.
  const nextId = useRef(4);

  const onCreated = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers([...users, user]);
    setInputs({
      username: '',
      email: ''
    })
    // console.log(nextId.current);
    nextId.current += 1;
  }

  return (
    <>
      <CreateUser username={username} email={email} onChanged={onChanged} onCreated={onCreated} />
      <UserList users={users} />
    </>
  );
}

export default App;
