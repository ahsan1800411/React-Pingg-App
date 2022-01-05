import React from 'react';
import { IState as IProps } from '../App';

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className='List'>
          <div className='List-header'>
            <img src={person.url} alt='A Great Person' className='List-img' />
            <h1>{person.name}</h1>
          </div>
          <h2>{person.age} years old</h2>
          <h2 className='List-note'>{person.note}</h2>
        </li>
      );
    });
  };
  return (
    <div>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default List;
