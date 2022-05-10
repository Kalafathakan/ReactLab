import { useState } from 'react';

import Header from './components/Header';
import Grocery from './components/Grocery';

import './App.css';

const App = () => {
  const [groceryList, setGroceryList] = useState([
    {
      name: 'Apple',
      quantity: 3,
      id: 1,
    },
    {
      name: 'Oranges',
      quantity: 2,
      id: 2,
    },
    {
      name: 'Cucumber',
      quantity: 4,
      id: 3,
    },
    {
      name: 'Potatos',
      quantity: 4,
      id: 4,
    },
  ]);

  return (
    <div>
      <Header title='Grocery list' item={24} />
      {/* <Grocery name='apple' quantity={2} />
      <Grocery name='orange' quantity={4} />
      <Grocery name='cucumber' quantity={3} /> */}
      {groceryList.map((g) => (
        <Grocery
          name={g.name}
          quantity={g.quantity}
          key={g.id.toString()}
          id={g.id}
        />
      ))}
    </div>
  );
};

export default App;
