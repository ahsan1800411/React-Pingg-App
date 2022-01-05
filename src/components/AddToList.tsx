import React, { useState } from 'react';
import { IState as Props } from './../App';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    url: '',
    note: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note,
      },
    ]);
    setInput({
      name: '',
      age: '',
      url: '',
      note: '',
    });
  };

  return (
    <div className='AddToList'>
      <input
        type='text'
        placeholder='Name'
        className='AddToList-input'
        name='name'
        value={input.name}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Age'
        className='AddToList-input'
        name='age'
        value={input.age}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='ImageUrl'
        className='AddToList-input'
        name='url'
        value={input.url}
        onChange={handleChange}
      />
      <textarea
        placeholder='Note'
        className='AddToList-input'
        name='note'
        value={input.note}
        onChange={handleChange}
      />
      <button className='AddToList-btn' onClick={handleClick}>
        Add To List
      </button>
    </div>
  );
};

export default AddToList;
