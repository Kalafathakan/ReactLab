import Quantity from './Quantity';
type GroceryProps = {
  name: string;
  quantity: number;
  id: string;
  onDelete: (id: string) => void;
  onQuantityChange: (id: string, data: number) => void;
};
const Grocery = (props: GroceryProps) => {
  return (
    <div className='grocery'>
      <span className='grocery-name'>
        <button
          className='remove-grocery'
          onClick={() => props.onDelete(props.id)}
        >
          X
        </button>
        {props.name}
      </span>
      <Quantity
        quantity={props.quantity}
        id={props.id}
        onQuantityChange={props.onQuantityChange}
      />
    </div>
  );
};

export default Grocery;

// import Quantity from './Quantity';

// const Grocery = (props: GroceryProps) => {
//   console.log(props);
//   return (
//     <div className='grocery'>
//       <span className='grocery-name'>{props.name}</span>
//       <Quantity quantity={props.quantity} id={props.id} />
//     </div>
//   );
// };

// export default Grocery;
