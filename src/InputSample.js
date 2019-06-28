import React, { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const { name, nickname } = inputs;
  // e = event 객체
  const onChanged = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  }
  const onReset = (e) => {
    setInputs({
      name: '',
      nickname: ''
    })
  }
  return (
    <div>
      <input name="name" onChange={onChanged} placeholder="name" value={name} />
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