import React from 'react';

// 함수형태로 컴포넌트를 만들자
function Hello({ color, name }) {
  return <div style={{ color }}>Hello World {name}</div>
}

// props 기본값 설정
Hello.defaultProps = {
  name: 'No Name'
}

export default Hello;