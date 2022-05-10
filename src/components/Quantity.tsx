import { useState } from 'react';
type QuantityProps = {
  quantity: number;
  id: number;
};
const Quantity = (props: QuantityProps) => {
  const [quan, setQuantity] = useState(props.quantity);
  // console.log(props);
  return (
    <span className='counter'>
      <button
        className='counter-action increment'
        onClick={() => setQuantity(quan + 1)}
      >
        +
      </button>
      <span className='counter-items'>{quan}</span>
      <button
        className='counter-action decrement'
        onClick={() =>
          setQuantity((prev) => {
            return prev > 0 ? prev - 1 : 0;
          })
        }
      >
        -
      </button>
      {/* <button
        className='counter-action increment'
        onClick={() => setQuantity(quan - 1)}
      >
        -
      </button> */}
    </span>
  );
};

export default Quantity;
