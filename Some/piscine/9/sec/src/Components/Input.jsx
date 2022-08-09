import React, { useState } from 'react';

const Input = () => {
  let [text, setText] = useState('Template');

  return (
    <div>
      <h1>{text}</h1>
      <input
        type='text'
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></input>
    </div>
  );
};

export default Input;
