import React from 'react';
import './styles.css';

interface Props {
  toDo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ toDo, setToDo, handleAdd }) => {
  return (
    <form className='input' onSubmit={handleAdd}>
      <input
        type='input'
        value={toDo}
        onChange={(el) => setToDo(el.target.value)}
        placeholder='Type To-Do'
        className='input__box'
      />
      <button type='submit' className='input_submit'>
        Ok
      </button>
    </form>
  );
};

export default InputField;
