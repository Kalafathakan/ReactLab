import { useState } from 'react';
type QuantityProps = {
  quantity: number;
  id: string;
  onQuantityChange: (id: string, value: number) => void;
};

const Quantity = ({ onQuantityChange, id, quantity }: QuantityProps) => {
  //console.log(props);
  return (
    <span className='counter'>
      <button
        className='counter-action decrement'
        onClick={() => onQuantityChange(id, 1)}
      >
        +
      </button>
      <span className='counter-items'>{quantity}</span>
      <button
        className='counter-action increment'
        onClick={() => onQuantityChange(id, -1)}
      >
        -
      </button>
    </span>
  );
};

export default Quantity;
