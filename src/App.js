import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'ggybbo';
  const style = {
    backgroundColor: 'green',
    color: 'aqua',
    fontSize: 18,
    padding: '1rem'
  }
  return (
    <>
      {/** 주석활용법 JSX */}
      <div className="" style={style}>{name}</div>
      <div className="gray-box"></div>
      <Hello
      // 주석 inline
      />
    </>
  );
}

export default App;
