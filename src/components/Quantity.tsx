import { useState } from 'react';
type QuantityProps = {
  quantity: number;
  id: string;
  onQuantityChange: (id: string, data: number) => void;
};

const Quantity = ({ onQuantityChange, id, quantity }: QuantityProps) => {
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
// const Quantity = (props: QuantityProps) => {
//   const [quan, setQuantity] = useState(props.quantity);
//   // console.log(props);
//   return (
//     <span className='counter'>
//       <button
//         className='counter-action increment'
//         onClick={() => setQuantity(quan + 1)}
//       >
//         +
//       </button>
//       <span className='counter-items'>{quan}</span>
//       <button
//         className='counter-action decrement'
//         onClick={() =>
//           setQuantity((prev) => {
//             return prev > 0 ? prev - 1 : 0;
//           })
//         }
//       >
//         -
//       </button>
//       {/* <button
//         className='counter-action increment'
//         onClick={() => setQuantity(quan - 1)}
//       >
//         -
//       </button> */}
//     </span>
//   );
// };

export default Quantity;
