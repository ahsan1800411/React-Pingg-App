import { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: { name: string; age: number; url: string; note?: string }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Imran Khan',
      age: 69,
      url: 'https://i.tribune.com.pk/media/images/imrankhan-posing1641228982-0/imrankhan-posing1641228982-0.jpg',
      note: 'A great Leader',
    },
  ]);
  return (
    <div className='App'>
      <h1>People invited to the party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
