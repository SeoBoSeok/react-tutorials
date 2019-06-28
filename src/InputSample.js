import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const nameInput = useRef();
  const { name, nickname } = inputs;
  // e = event 객체
  const onChanged = (e) => {
    const { name, value } = e.target;
    // 객체상태를 업데이트시 불변성을 지키면서 업데이트 위해서 기존 객체를 복사후 할당
    setInputs({
      ...inputs,
      [name]: value
    });
  }
  const onReset = (e) => {
    setInputs({
      name: '',
      nickname: ''
    });
    nameInput.current.focus();
  }
  return (
    <div>
      <input name="name" onChange={onChanged} placeholder="name" value={name} ref={nameInput} />
      <input name="nickname" onChange={onChanged} placeholder="nickname" value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} | {nickname}
      </div>
    </div>
  )
}

export default InputSample;